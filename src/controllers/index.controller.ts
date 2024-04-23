import { EscPos } from "@tillpos/xml-escpos-helper"
import { connectToPrinter } from "../connection"
import { PRINTER_HOST, PRINTER_PORT } from "../shared/config"
import { template } from "./template"
import { generateImgWithCanvas } from "../shared/utils/getImgWithCanvas"

function generateBuffer(template, data) {
  return EscPos.getBufferFromTemplate(template, data)
}

async function sendMessageToPrinter(PRINTER_HOST, PRINTER_PORT, buffer) {
  try {
    await connectToPrinter(PRINTER_HOST, PRINTER_PORT, buffer)
  } catch (err) {
    console.log(err)
  }
}

export const printReceipt = async (req, res) => {
  try {
    generateImgWithCanvas({ sketch: [req.body.sketch] || [] })
    const message = generateBuffer(template, req.body)
    await sendMessageToPrinter(PRINTER_HOST, PRINTER_PORT, message)
    res.status(201).json(req.body)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const statusConnection = async (req, res) => {
  try { const templateConnection = `<?xml version="1.0" encoding="UTF-8"?><document><align mode="center"><bold><text-line size="1:0">{{message}}</text-line></bold></align></document>`
    const data = {
      message: "Impresora conectada"
    }
    const message = generateBuffer(templateConnection, data)
    await sendMessageToPrinter(PRINTER_HOST, PRINTER_PORT, message)
    res.status(201).json({ message: "Succesfully connected" })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
