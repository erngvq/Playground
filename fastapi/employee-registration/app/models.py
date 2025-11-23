from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    email = Column(String(50), unique=True, index=True)
    phone_number = Column(String(15))
    designation_id = Column(Integer, ForeignKey("designations.id"))
    role_id = Column(Integer, ForeignKey("roles.id"))

    designation = relationship("Designation", back_populates="employees")
    role = relationship("Role", back_populates="employees")

class Designation(Base):
    __tablename__ = "designations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(20), unique=True, index=True)

    employees = relationship("Employee", back_populates="designation")

class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(80), unique=True, index=True)

    employees = relationship("Employee", back_populates="role")
