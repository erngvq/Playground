from sqlalchemy.orm import Session
from . import models, schemas

def get_employees(db: Session):
    # return db.query(models.Employee).all()
    employees = db.query(
        models.Employee.id,
        models.Employee.name,
        models.Employee.email,
        models.Employee.phone_number,
        models.Designation.name.label("designation_name"),
        models.Role.name.label("role_name"),
    ).join(
        models.Designation, models.Employee.designation_id == models.Designation.id
    ).join(
        models.Role, models.Employee.role_id == models.Role.id
    ).all()

    return [
        {
            "id": emp.id,
            "name": emp.name,
            "email": emp.email,
            "phone_number": emp.phone_number,
            "designation_name": emp.designation_name,
            "role_name": emp.role_name,
        }
        for emp in employees
    ]

def get_employee_by_id(db: Session, employee_id: int):
    employee = db.query(
        models.Employee.id,
        models.Employee.name,
        models.Employee.email,
        models.Employee.phone_number,
        models.Designation.name.label("designation_name"),
        models.Role.name.label("role_name"),
    ).join(
        models.Designation, models.Employee.designation_id == models.Designation.id
    ).join(
        models.Role, models.Employee.role_id == models.Role.id
    ).filter(models.Employee.id == employee_id).first()

    print(employee)
    return employee

def create_employee(db: Session, employee: schemas.EmployeeCreate):
    db_employee = models.Employee(**employee.model_dump())
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)

    return db_employee

def update_employee(db: Session, employee_id: int, employee: schemas.EmployeeUpdate):
    db_employee = db.query(models.Employee).filter(models.Employee.id == employee_id).first()

    if db_employee:
        for key, value in employee.model_dump().items():
            setattr(db_employee, key, value)
        db.commit()
        db.refresh(db_employee)

    return db_employee

def delete_employee(db: Session, employee_id: int):
    db_employee = db.query(models.Employee).filter(models.Employee.id == employee_id).first()

    if db_employee:
        db.delete(db_employee)
        db.commit()

    return db_employee

def get_roles(db: Session):
    return db.query(models.Role).all()

def get_designations(db: Session):
    return db.query(models.Designation).all()
