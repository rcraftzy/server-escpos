// import { template } from './template'
import { generateImgWithCanvas } from '../shared/utils/getImgWithCanvas'
import { sendDataToPrinter, sendIsConnected } from '../connection'
import { readFileSync } from 'fs'

export const printReceipt = async (req, res) => {
	try {
		const response = await generateImgWithCanvas({
			sketch: [req.body.sketch] || []
		})
		const template = readFileSync('public/template.xml', { encoding: 'utf8' })
		const data = { ...req.body, base64PngImage: response }
		await sendDataToPrinter(data, template)
		res.status(201).json(data)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

export const statusConnection = async (req, res) => {
	const isConnected = await sendIsConnected()
	res.status(201).json({ isConnected })
}
