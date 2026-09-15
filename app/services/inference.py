import joblib

model = joblib.load("house_price.pkl")

def predict_price(df) -> float:
    prediction = model.predict(df)
    return float(prediction[0])