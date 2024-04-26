import net from 'node:net'
import { PRINTER_HOST, PRINTER_PORT } from './shared/config'
import { EscPos } from '@tillpos/xml-escpos-helper'

const connectToPrinter = (
	host: string,
	port: number,
	onData?: (device: net.Socket) => void
): Promise<void> => {
	return new Promise((res, rej) => {
		const device = new net.Socket()
		device.on('close', () => {
			device.destroy()
			res()
		})
		device.connect(port, host, () => {
			if (onData) onData(device)
			device?.emit('close')
		})
		device.on('error', (error) => {
			console.error('Error al conectarse con la impresora térmica:', error)
			rej(error)
		})
	})
}

export const sendDataToPrinter = async (input: any, template: string) => {
	const buffer = Uint8Array.from(EscPos.getBufferFromTemplate(template, input))
	try {
		await connectToPrinter(PRINTER_HOST, PRINTER_PORT, (device) => {
			device.write(buffer)
		})
	} catch (err) {
		console.log(err)
	}
}

export const sendIsConnected = async () => {
	try {
		await connectToPrinter(PRINTER_HOST, PRINTER_PORT)
		return true
	} catch (error) {
		return false
	}
}
