import { me } from "./data/me";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(me);
  }
}
