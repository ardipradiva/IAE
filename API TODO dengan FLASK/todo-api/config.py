class Config:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///todo.db'  # atau database lain seperti MySQL/PostgreSQL
    SQLALCHEMY_TRACK_MODIFICATIONS = False