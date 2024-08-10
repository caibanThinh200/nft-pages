// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { getPassportStrategy } from "../../components/toastGroup"

export const checkAuth = ( async () => {
  await getPassportStrategy();
})();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
