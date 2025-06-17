const API_URL = 'http://192.168.15.5:8080/api';

// POST nova leitura
export async function sendReading(reading) {
  try {
    const res = await fetch(`${API_URL}/readings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reading),
    });
    if (!res.ok) throw new Error("Erro ao enviar leitura");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// POST novo sensor
export async function createSensor(sensor) {
  try {
    const res = await fetch(`${BASE_URL}/sensors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sensor),
    });
    if (!res.ok) throw new Error("Erro ao criar sensor");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// GET leituras
export async function getReadings() {
  try {
    const res = await fetch(`${API_URL}/readings`);
    if (!res.ok) throw new Error("Erro ao buscar leituras");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

// GET sensores
export async function getSensors() {
  try {
    const res = await fetch(`${API_URL}/sensors`);
    if (!res.ok) throw new Error("Erro ao buscar sensores");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
