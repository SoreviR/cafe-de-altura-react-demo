const getData = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error parsing JSON:", error);
  }
};

const cafeDeAlturaApiUrl = "https://cafe-de-altura.vercel.app/api/products";
const datos = await getData(cafeDeAlturaApiUrl);
export const coffeData = await datos.products;
