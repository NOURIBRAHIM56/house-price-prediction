from pydantic import BaseModel

class PredictionRequest(BaseModel):
    location: str
    carpet_area_sqft: float
    floor_num: int
    Bathroom_num: int
    Balcony_num: int
    Furnishing: str
    Transaction: str
    Ownership: str
    facing: str

class PredictionResponse(BaseModel):
    predicted_price: float