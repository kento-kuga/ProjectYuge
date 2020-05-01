import axios from "axios";

const ENDPOINT = "http://localhost:3000/api/v1";

export const ApiGet = async <T>(path: string) => {
  const url = ENDPOINT + path;
  try {
    const res = await axios.get<T>(url);

    return res.data;
  } catch (err) {
    throw new Error(err.status);
  }
};
