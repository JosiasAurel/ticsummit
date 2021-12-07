from fastapi import FastAPI, Request

app = FastAPI()


@app.get("/")
def _handle_root(request: Request):
    return {"Hello", "World"}
