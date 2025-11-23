from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# MySQL credentials
DATABASE_USERNAME = "root"
DATABASE_PASSWORD = "root"
DATABASE_HOST = "localhost"
DATABASE_PORT = "3306"
DATABASE_NAME = "employee_registration"

# SQLAlchemy MySQL connection string
DATABASE_URL = f"mysql+pymysql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"

# Initialize SQLAlchemy components
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
