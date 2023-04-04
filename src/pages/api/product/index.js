import { products } from "../../../../Data/products"

export default function handler(req, res) {
    res.status(200).json(products)
  }

