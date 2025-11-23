from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import engine, SessionLocal

# Initialize database
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Angular development server
origins = ["http://localhost:4200"]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # list of allowed origins
    allow_credentials=True, # allow cookies and credentials
    allow_methods=["*"],    # allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],    # allow all headers
)

# Dependency to get the DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/employees", response_model=list[schemas.Employee])
def get_employees(db: Session = Depends(get_db)):
    return crud.get_employees(db)

@app.get("/employee/{employee_id}", response_model=schemas.Employee)
def get_employee(employee_id: int, db: Session = Depends(get_db)):
    employee = crud.get_employee_by_id(db, employee_id)
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee

@app.post("/employee")
def create_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    return crud.create_employee(db, employee)

@app.put("/employee/{employee_id}")
def update_employee(employee_id: int, employee: schemas.EmployeeUpdate, db: Session = Depends(get_db)):
    updated_employee = crud.update_employee(db, employee_id, employee)
    if not updated_employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return updated_employee

@app.delete("/employee/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    deleted_employee = crud.delete_employee(db, employee_id)
    if not deleted_employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"result": "Employee deleted successfully"}

@app.get("/roles", response_model=list[schemas.Role])
def read_roles(db: Session = Depends(get_db)):
    return crud.get_roles(db)

@app.get("/designations", response_model=list[schemas.Designation])
def read_designations(db: Session = Depends(get_db)):
    return crud.get_designations(db)
