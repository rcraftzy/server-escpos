import net from "node:net"

export function connectToPrinter(PRINTER_HOST, PRINTER_PORT, buffer) {
  return new Promise((resolve, reject) => {
    let device: net.Socket | null = new net.Socket();
    try {
      device.on("close", () => {
        if (device) {
          device = null
        }
        resolve(true)
        return;
      })

      device.connect(PRINTER_PORT, PRINTER_HOST, () => {
        if (device) {
          if (buffer) {
            device.write(buffer);
          }
          device.emit("close");
        }
      });
    } catch (error) {
      device.on('error', (error) => {
        console.error('Error al conectarse con la impresora térmica:', error);
      });
    }
  })
}
