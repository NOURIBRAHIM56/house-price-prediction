import pandas as pd
import json

with open("locations.json", "r") as f:
    ALLOWED_LOCATIONS = json.load(f)

def prepare_input(data: dict) -> pd.DataFrame:
    location = data["location"]
    if location not in ALLOWED_LOCATIONS:
        location = "other"

    row = {
        "carpet_area_sqft": data["carpet_area_sqft"],
        "floor_num": data["floor_num"],
        "Bathroom_num": data["Bathroom_num"],
        "Balcony_num": data["Balcony_num"],
        "location_grouped": location,
        "Furnishing": data["Furnishing"],
        "Transaction": data["Transaction"],
        "Ownership": data["Ownership"],
        "facing": data["facing"],
    }

    return pd.DataFrame([row])