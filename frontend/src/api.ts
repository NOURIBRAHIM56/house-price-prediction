import type { PredictionRequest, PredictionResponse } from "./types/house";

const BASE_URL = "http://127.0.0.1:8000";

export async function getPrediction(data: PredictionRequest): Promise<PredictionResponse> {
    const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("فشل الاتصال بالسيرفر");
    }

    return response.json();
}