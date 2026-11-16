
// =========================================
// WHITE ELEPHANT GIFT EXCHANGE
// VERSION 3
// =========================================


const form = document.getElementById("giftForm");

const message = document.getElementById("message");

const result = document.getElementById("result");

const recipientName = document.getElementById("recipientName");

const submitButton = document.getElementById("submitButton");

const encoder = new TextEncoder();


// =========================================
// EMBEDDED ASSIGNMENTS
// =========================================
//
// Replace this object with the complete contents
// of your generated assignments.json file.
//
// =========================================

const assignmentData = {
  "version": 3,
  "iterations": 200000,
  "participants": [
    {
      "id": "b2bb1b0edaca5806ff6ba58c",
      "salt": "s5aVs1Tw91AWFg/6S6hGiw==",
      "name": {
        "iv": "kNCY11vNr5Q2s9eN",
        "ciphertext": "BVoH5NkFg52rf+xlaF2BMFwSsPE="
      },
      "assignment": {
        "iv": "bmeD18UdxmCfnHES",
        "ciphertext": "OEAQ/17kBqmF0IaOFQAm/H9j96fdvR0="
      }
    },
    {
      "id": "6f1b0bb28e97b6bceee769f8",
      "salt": "HlY1wZv4CkTNC9H2e7Tk2g==",
      "name": {
        "iv": "Vhq3whW+E0BEdcaJ",
        "ciphertext": "QhXq9KzXpOM/XBG7DjNu7wPO9GmcLC4="
      },
      "assignment": {
        "iv": "3EJ4EdIdXHQYkUOE",
        "ciphertext": "36roiEllLJSx/SitK9ZvlsngJreKGA=="
      }
    },
    {
      "id": "7bea41c408e5dea6c7c147b2",
      "salt": "thFAMRmOSe227/eM9fSYOQ==",
      "name": {
        "iv": "UvINJLkCm3bZDwpj",
        "ciphertext": "vFcsXtdyOtUtAABJ2RiOH2a7bqS4/Q=="
      },
      "assignment": {
        "iv": "gzJCzqkz4jX4xbye",
        "ciphertext": "YxHPGS50lyGqtYUrzjnxBIOuTaKJAQ=="
      }
    },
    {
      "id": "fc847cc480915e4b99b97998",
      "salt": "idHBbR3lKBNYeWvEBc5mbg==",
      "name": {
        "iv": "WzRrRMXAV8CyM2Tx",
        "ciphertext": "/TMnuVoumlLHZXRNAgBUCZp3s7bUhw=="
      },
      "assignment": {
        "iv": "3JPiBm1ZL/evx4Xg",
        "ciphertext": "4fUgUi6O4IhMFF2LTnt/h/qzKpeo8LM="
      }
    },
    {
      "id": "53c97256ee8512f9729850ea",
      "salt": "O7NfmrKdxX0JayB4eGchCA==",
      "name": {
        "iv": "arN9M50KvSY3w7q9",
        "ciphertext": "EPSDyU+VQjI9Y6seeTwJW/NLpUkvOX4="
      },
      "assignment": {
        "iv": "JmaKr0FztAD7cuN5",
        "ciphertext": "wsExtCPs3POXQY7U7s1Zp+8ZF3k="
      }
    }
  ]
};


// =========================================
// NORMALIZATION
// Must match Python normalize_name()
// =========================================

function normalizeName(value) {

    if (typeof value !== "string") {

        throw new TypeError(
            "Expected a string for name normalization."
        );

    }

    return value
        .normalize("NFKC")
        .trim()
        .replace(/\s+/gu, " ")
        .toLowerCase();

}


// =========================================
// BASE64 DECODING
// =========================================

function fromBase64(value) {

    if (typeof value !== "string") {

        throw new TypeError(
            "Invalid Base64 value."
        );

    }

    const binary = atob(value);

    return Uint8Array.from(
        binary,
        character => character.charCodeAt(0)
    );

}


// =========================================
// DERIVE AES-256 KEY
// Must match Python derive_key()
// =========================================

async function deriveKey(
    password,
    salt,
    iterations
) {

    const passwordBytes = encoder.encode(password);

    const importedPassword = await crypto.subtle.importKey(
        "raw",
        passwordBytes,
        "PBKDF2",
        false,
        ["deriveKey"]
    );

    return crypto.subtle.deriveKey(

        {
            name: "PBKDF2",
            salt: salt,
            iterations: iterations,
            hash: "SHA-256"
        },

        importedPassword,

        {
            name: "AES-GCM",
            length: 256
        },

        false,

        ["decrypt"]

    );

}


// =========================================
// DECRYPT TEXT
// Must match Python encrypt_text()
// =========================================

async function decryptText(
    encrypted,
    key,
    participantId,
    field
) {

    if (
        !encrypted ||
        typeof encrypted.iv !== "string" ||
        typeof encrypted.ciphertext !== "string"
    ) {

        throw new Error(
            "Invalid encrypted record."
        );

    }

    const iv = fromBase64(encrypted.iv);

    const ciphertext = fromBase64(
        encrypted.ciphertext
    );

    const aad = encoder.encode(
        `holiday-v3:${participantId}:${field}`
    );

    const decrypted = await crypto.subtle.decrypt(

        {
            name: "AES-GCM",
            iv: iv,
            additionalData: aad,
            tagLength: 128
        },

        key,

        ciphertext

    );

    return new TextDecoder("utf-8", {
        fatal: true
    }).decode(decrypted);

}


// =========================================
// VALIDATE EMBEDDED DATA
// =========================================

function validateAssignments() {

    if (
        assignmentData.version !== 3 ||
        !Array.isArray(assignmentData.participants) ||
        !Number.isInteger(assignmentData.iterations) ||
        assignmentData.iterations < 1
    ) {

        throw new Error(
            "Invalid assignment data. Check your embedded JSON."
        );

    }

    if (assignmentData.participants.length < 2) {

        throw new Error(
            "No valid assignments found. Paste your generated JSON into app.js."
        );

    }

    console.log(
        "Assignments loaded:",
        assignmentData.participants.length,
        "participants."
    );

}


// =========================================
// FIND PARTICIPANT AND DECRYPT
// =========================================

async function findAssignment(
    enteredName,
    password
) {

    const normalizedEnteredName = normalizeName(
        enteredName
    );

    // Try each encrypted participant record.
    // No plaintext names or lookup identifiers are required.

    for (const record of assignmentData.participants) {

        try {

            if (
                !record.id ||
                !record.salt ||
                !record.name ||
                !record.assignment
            ) {

                continue;

            }

            // Derive the participant's encryption key
            const salt = fromBase64(record.salt);

            const key = await deriveKey(
                password,
                salt,
                assignmentData.iterations
            );

            // Attempt to decrypt participant's own name
            const decryptedName = await decryptText(
                record.name,
                key,
                record.id,
                "name"
            );

            // Check whether this is the entered participant
            if (
                normalizeName(decryptedName) !==
                normalizedEnteredName
            ) {

                continue;

            }

            // Decrypt recipient
            const recipient = await decryptText(
                record.assignment,
                key,
                record.id,
                "assignment"
            );

            return recipient;

        } catch (error) {

            // Wrong password or a different participant record.
            // Continue checking the remaining records.

            if (
                error.name !== "OperationError" &&
                error.name !== "TypeError"
            ) {

                console.warn(
                    "Record could not be processed:",
                    error
                );

            }

        }

    }

    throw new Error(
        "Invalid credentials."
    );

}


// =========================================
// LOGIN
// =========================================

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    message.textContent = "";

    result.hidden = true;

    recipientName.textContent = "";

    const name = document
        .getElementById("name")
        .value;

    const password = document
        .getElementById("password")
        .value;


    if (!name.trim() || !password) {

        message.textContent =
            "Please enter your name and password.";

        return;

    }


    submitButton.disabled = true;

    submitButton.textContent =
        "Checking your assignment...";


    try {

        // Check Web Crypto support
        if (
            !window.crypto ||
            !window.crypto.subtle
        ) {

            throw new Error(
                "Web Crypto is unavailable. Open the page through HTTPS or localhost."
            );

        }


        // Validate embedded JSON
        validateAssignments();


        // Retrieve and decrypt assignment
        const recipient = await findAssignment(
            name,
            password
        );


        // Display result
        recipientName.textContent = recipient;

        result.hidden = false;

        message.textContent =
            "Your assignment has been revealed!";


        // Clear password after successful login
        document.getElementById("password").value = "";


        console.log(
            "Assignment successfully decrypted."
        );


    } catch (error) {

        console.error(
            "Assignment retrieval failed:",
            error
        );


        if (error.message === "Invalid credentials.") {

            message.textContent =
                "Incorrect name or password. Please try again.";

        } else {

            message.textContent =
                error.message ||
                "Something went wrong. Please try again.";

        }

    } finally {

        submitButton.disabled = false;

        submitButton.textContent =
            "Reveal my assignment 🎄";

    }

});


// =========================================
// INITIALIZATION
// =========================================

try {

    validateAssignments();

    message.textContent = "";

} catch (error) {

    console.error(
        "Initialization error:",
        error
    );

    message.textContent =
        error.message;

}
