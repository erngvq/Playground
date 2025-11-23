## Database Setup

- pip install sqlalchemy pydantic pymsql
- docker compose up -d

```
INSERT INTO employee_registration.designations (id, name) VALUES (1, 'Backend');
INSERT INTO employee_registration.designations (id, name) VALUES (2, 'Frontend');
INSERT INTO employee_registration.designations (id, name) VALUES (3, 'Design');

INSERT INTO employee_registration.roles (id, name) VALUES (1, 'Developer');
INSERT INTO employee_registration.roles (id, name) VALUES (2, 'Manager');
INSERT INTO employee_registration.roles (id, name) VALUES (3, 'Lead');

INSERT INTO employee_registration.employees (id, name, email, phone_number, designation_id, role_id) VALUES (1, 'Harry', 'harry@fakecompany.in', '111-222-3333', 1, 1);
INSERT INTO employee_registration.employees (id, name, email, phone_number, designation_id, role_id) VALUES (2, 'Ernie', 'ernie@fakecompany.in', '333-444-5555', 1, 2);
INSERT INTO employee_registration.employees (id, name, email, phone_number, designation_id, role_id) VALUES (3, 'Ron', 'ron@fakecompany.in', '555-666-7777', 2, 3);
```

## Server Spinning (Localhost)

- uvicorn app.main:app --reload
- http://127.0.0.1:8000/docs
