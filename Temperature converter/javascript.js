function convertTemperature() {
    const tempInput = document.getElementById("temperature").value;
    const typeSelect = document.getElementById("type").value;
    const result = document.getElementById("result");
    let convertedTemperature;
  
    if (isNaN(tempInput)) {
      result.textContent = "Please enter a valid number.";
      return;
    }
    const temperature = parseFloat(tempInput);
    if (typeSelect === "celsius") {
      const fahrenheit = (temperature * 9/5) + 32;
      const kelvin = temperature + 273.15;
      result.textContent = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F and ${temperature}°C is equal to ${kelvin.toFixed(2)}K.`;
    } 
    else if (typeSelect === "fahrenheit") {
      const celsius = (temperature - 32) * 5/9;
      const kelvin = (temperature - 32) * 5/9 + 273.15;
      result.textContent = `${temperature}°F is equal to ${celsius.toFixed(2)}°C and ${temperature}°F is equal to ${kelvin.toFixed(2)}K.`;
    } 
    else if (typeSelect === "kelvin") {
      const celsius = temperature - 273.15;
      const fahrenheit = (temperature - 273.15) * 9/5 + 32;
      result.textContent = `${temperature}K is equal to ${celsius.toFixed(2)}°C and ${temperature}K is equal to ${fahrenheit.toFixed(2)}°F.`;
    }
  }
  