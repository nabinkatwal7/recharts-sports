import axios, { AxiosError, AxiosInstance } from "axios";

export function get(url: string) {
  return axios
    .get(`https://api.football-data.org/v4/${url}`, {
      headers: {
        "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}
