import net from 'node:net'
import { PRINTER_HOST, PRINTER_PORT } from './shared/config'
import { EscPos } from '@tillpos/xml-escpos-helper'

const connectToPrinter = (
  host: string,
  port: number,
  buffer: Buffer
): Promise<unknown> => {
  return new Promise((res: (value: unknown) => void, rej) => {
    let device: null | net.Socket = new net.Socket()
    try {
      device.on('close', () => {
        if (device) {
          device.destroy()
          device = null
        }
        res(true)
        return
      })

      device.connect(port, host, () => {
        device?.write(buffer)
        device?.emit('close')
      })
    } catch (error) {
      device.on('error', (error) => {
        console.error('Error al conectarse con la impresora térmica:', error)
      })
    }
  })
}

export const sendDataToPrinter = async (input: any, template: string) => {
  const buffer = EscPos.getBufferFromTemplate(template, input)
  try {
    await connectToPrinter(
      PRINTER_HOST,
      PRINTER_PORT,
      buffer as unknown as Buffer
    )
  } catch (err) {
    console.log(err)
  }
}

const isConnected = (host: string, port: number) => {
  return new Promise((res: (value: unknown) => void, rej) => {
    let device: null | net.Socket = new net.Socket()
    try {
      device.on('close', () => {
        if (device) {
          device.destroy()
          device = null
        }
        return
      })

      device.connect(port, host, () => {
        device?.emit('close')
        return true
      })
    } catch (error) {
      device.on('error', (error) => {
        console.error('Error al conectarse con la impresora térmica:', error)
      })
      return false
    }
  })
}

export const sendIsConnected = async () => {
  return await isConnected(PRINTER_HOST, PRINTER_PORT)
}


