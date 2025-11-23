from pydantic import BaseModel
from typing import Optional

class EmployeeBase(BaseModel):
    name: str
    email: str
    phone_number: str

class EmployeeCreate(EmployeeBase):
    designation_id: int
    role_id: int

class EmployeeUpdate(EmployeeBase):
    designation_id: int
    role_id: int

class Employee(EmployeeBase):
    id: int
    role_name: Optional[str]
    designation_name: Optional[str]

    class Config:
        from_attributes = True

class Designation(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True

class Role(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True
