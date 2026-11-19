
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
      "id": "de9d79cd21dd2686c3717661",
      "salt": "uC7dEJdXhsCxWcji2MVJeA==",
      "name": {
        "iv": "NDAS/TC8iF7zuQ7X",
        "ciphertext": "B8sgTrRN3pgDvGmG8ceYYyfjigrLyck="
      },
      "assignment": {
        "iv": "boAmcF9QnJv9PQAb",
        "ciphertext": "5XTeW/+xIrr/jZ1JZ19teinbylE0hA=="
      }
    },
    {
      "id": "467f7187285f15ab1df0647e",
      "salt": "xa1vns/XLQDYZcrISedmuA==",
      "name": {
        "iv": "TysL2WgZnoNF+XGE",
        "ciphertext": "zjDP9yyo2KA/3jelgi79epbHyZ0PGA=="
      },
      "assignment": {
        "iv": "QPzS6psRGXhXgGRe",
        "ciphertext": "2jKkVU2C97G1JztpzEo0krtcBSgSHw=="
      }
    },
    {
      "id": "8b6a0d8c87022a0eeed57472",
      "salt": "N/YBBm7XM37bq83FBWSdGg==",
      "name": {
        "iv": "NnsvVgVBUEhPAI1+",
        "ciphertext": "WvfJEQohUow/tvS4g3krfj6hrs8bjQ=="
      },
      "assignment": {
        "iv": "a/bySBC2h37zEXGu",
        "ciphertext": "UkCzD9TVFRDyTRxTRG6HpdzF5BcJvM8="
      }
    },
    {
      "id": "a467031976741fbdae812856",
      "salt": "JWPqE9UTpDzlxKAT8kE8hw==",
      "name": {
        "iv": "n/koXQPDT+GB4RyS",
        "ciphertext": "/OQaIeLUYPjTIWU8k9e7OWsvSPDnfRo="
      },
      "assignment": {
        "iv": "7yWdbQCuJBxPsfcB",
        "ciphertext": "GopmrL4pC2G7huwVhx43rMIwMnT1SBs="
      }
    },
    {
      "id": "21b85d1efda4b605c696d9b4",
      "salt": "ddGggzUfDMCOMSaWm6O8Yw==",
      "name": {
        "iv": "SJfIkaPBpbxxsYkY",
        "ciphertext": "5P6bTQVkIy/yKscHAvOo92NiLkv3Gx4="
      },
      "assignment": {
        "iv": "EstU0pfplOLTGSBq",
        "ciphertext": "kPQBaSAFIt2QyqS8A1QPeYPyxuDeRw=="
      }
    },
    {
      "id": "2c6421452d6934d7f0290d11",
      "salt": "GRyuApV9xIRXCBpNcqwccw==",
      "name": {
        "iv": "WbDP4wNj4/RMapPO",
        "ciphertext": "lPvd4BLe7SruDBmPha7J48EsgmESUA=="
      },
      "assignment": {
        "iv": "wPL2okY27vRLfCJd",
        "ciphertext": "6KtDgOyBo9gT7QIPHroc4JD1DWNV"
      }
    },
    {
      "id": "f142b173677cfa3f963411c7",
      "salt": "TfpoyTOQ5Ccj3y/LsWuJBw==",
      "name": {
        "iv": "GMqZPKXVldWrojIb",
        "ciphertext": "hZqo+XicggmiqOK6vAqrsJyuQZJO"
      },
      "assignment": {
        "iv": "Iq5x0FDSt1nsbm59",
        "ciphertext": "ZH3HzDUcWbmebjp0quNm3d8F5VKjugY="
      }
    },
    {
      "id": "ecae0577f1797d1e2c9293e5",
      "salt": "Wk1z5vLzOyhlSmpClfKD0w==",
      "name": {
        "iv": "MB3Z/WhRLZwpsSSw",
        "ciphertext": "Cdw7UAg2Bic7nbS8znxfwVb1AjArzvs="
      },
      "assignment": {
        "iv": "Gd7tGguio7izggTy",
        "ciphertext": "unJ9jYp+QbJ6hAzST2hwVdbf9myRDRzK4A=="
      }
    },
    {
      "id": "0ea780c7f20829ab76ece268",
      "salt": "1jx2XTbpuXObCBiBn9sK8Q==",
      "name": {
        "iv": "s1xLG2IDodxFj2CN",
        "ciphertext": "wUrd8D/M/adHcUVU1yMkZobO1byabngO5Q=="
      },
      "assignment": {
        "iv": "YL1VW//MnJ82LDzk",
        "ciphertext": "zl6bI/eCImy8KDH7EKM2SjgfvSV61jzy"
      }
    },
    {
      "id": "5a6d0438e3ebdcf33631fb39",
      "salt": "LrQEgv8p7Eid1TPFQxl1eQ==",
      "name": {
        "iv": "nbq/P0xcHUyfMfFe",
        "ciphertext": "dX+EeO5qQURWMhgIXNpDP7rIhpRDISqk"
      },
      "assignment": {
        "iv": "sROysitd5ewUAJXv",
        "ciphertext": "sLod9x7WavhFgq3ILRTywicSNPs="
      }
    },
    {
      "id": "45b75ed81f07804ff5d9dc86",
      "salt": "LZupadzd5sj71SSpDPHU7A==",
      "name": {
        "iv": "ru+Ubg3kw5MpDYsJ",
        "ciphertext": "1FvERInuad81sDLRzK3yyYBgvWc="
      },
      "assignment": {
        "iv": "c/eAnC/gv6rtbox2",
        "ciphertext": "TXxCqFW/bUpuaOxe6Vl3CzUqtRNB"
      }
    },
    {
      "id": "69205deaa0a47ec70837baee",
      "salt": "8GRnRa42e1mUXJMhEmU3ww==",
      "name": {
        "iv": "Por11ap0hazHtxQv",
        "ciphertext": "RYS8In7t1ytRgZJtBlBeS1nMhO78"
      },
      "assignment": {
        "iv": "3Zjz/aTdGCkkNN/I",
        "ciphertext": "kG0MpovjY3NpaDEqOnGvx8maBv42JrE="
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
            "¡Tu amigo secreto ha sido revelado!";


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
            "Revelar mi amigo secreto 🎄";

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
