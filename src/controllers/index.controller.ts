import { template } from './template'
import { generateImgWithCanvas } from '../shared/utils/getImgWithCanvas'
import { sendDataToPrinter, sendIsConnected } from '../connection'

export const printReceipt = async (req, res) => {
  try {
    generateImgWithCanvas({ sketch: [req.body.sketch] || [] })
    await sendDataToPrinter(req.body, template)
    res.status(201).json(req.body)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const statusConnection = async (req, res) => {
  const isConnected = await sendIsConnected()
  res.status(201).json({ isConnected })
}
