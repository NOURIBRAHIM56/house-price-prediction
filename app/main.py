from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas.prediction import PredictionRequest, PredictionResponse
from app.services.preprocessing import prepare_input
from app.services.inference import predict_price

app = FastAPI(title="House Price Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    df = prepare_input(request.dict())
    price = predict_price(df)
    return PredictionResponse(predicted_price=price)