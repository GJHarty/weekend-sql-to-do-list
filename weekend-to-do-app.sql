CREATE TABLE "todolist" 
    ("id" SERIAL PRIMARY KEY,
     "task" VARCHAR (250) NOT NULL,
     "complete" BOOLEAN DEFAULT FALSE
    );
