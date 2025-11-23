from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

students = {
    1: {
        "name": "Harry",
        "age": 11,
        "course": "Charms"
    },
    2: {
        "name": "Hermione",
        "age": 12,
        "course": "Transfiguration"
    },
    3: {
        "name": "Ron",
        "age": 13,
        "course": "Herbology"
    },
}

class Student(BaseModel):
    name: str
    age: int
    course: str

class UpdateStudent(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    course: Optional[str] = None

@app.get("/")
def index():
    return students

@app.get("/get-student/{student_id}")
def get_student(student_id: int = Path(description="Student identifier", gt=0, lt=9)):
    return students[student_id]

@app.get("/get-by-name")
def get_by_name(*, name: Optional[str] = None, test: int):
    for student_id in students:
        if students[student_id]["name"] == name:
            return students[student_id]
    
    return {"Error": "Data not found"}

@app.post("/create-student/{student_id}")
def create_student(student_id: int, student: Student):
    if student_id in students:
        return {"Error": "Student ID already exists"}
    
    students[student_id] = student
    return students[student_id]

@app.put("/update-student/{student_id}")
def update_student(student_id: int, student: UpdateStudent):
    if student_id not in students:
        return {"Error": "Student ID not present"}

    if student.name != None:
        students[student_id]["name"] = student.name

    if student.age != None:
        students[student_id]["age"] = student.age

    if student.course != None:
        students[student_id]["course"] = student.course

    return students[student_id]

@app.delete("/delete-student/{student_id}")
def delete_student(student_id: int):
    if student_id not in students:
        return {"Error": "Student ID not present"}
    
    del students[student_id]
    return {"Message": "Student deleted successfully"}
