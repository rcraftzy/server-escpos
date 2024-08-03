import { describe, it, expect } from 'bun:test'
import server from 'bunrest'
import router from '../src/routes/print.routes'

const app = server()

const URL_PORT = 5555
const BASE_URL = `http://localhost:${URL_PORT}`
app.use('/', router)

describe('http test', () => {
	it('GET', async () => {
		const server = app.listen(URL_PORT, () => {
			console.log(`App is listening on port ${URL_PORT}`)
		})
		try {
			const res = await fetch(BASE_URL)
			expect(res.status).toBe(200)
			expect(await res.json()).toEqual({ message: 'Hello printer server ESC/POS' })
		} catch (e) {
			throw e
		} finally {
			server.stop()
		}
	})
})
describe('/api', () => {
  const url = BASE_URL + '/api'
	it('GET', async () => {
		const server = app.listen(URL_PORT, () => {
			console.log(`App is listening on port ${URL_PORT}`)
		})
		try {
			const res = await fetch(url)
			expect(res.status).toBe(200)
			expect(await res.json()).toEqual({ message: 'Welcome to api v1' })
		} catch (e) {
			throw e
		} finally {
			server.stop()
		}
	})
})
describe('/api/print/status', () => {
  const url = BASE_URL + '/api/print/status'
	it('GET', async () => {
		const server = app.listen(URL_PORT, () => {
			console.log(`App is listening on port ${URL_PORT}`)
		})
		try {
			const res = await fetch(url)
			expect(res.status).toBe(200)
			expect(await res.json()).toEqual({ isConnected: true })
		} catch (e) {
			throw e
		} finally {
			server.stop()
		}
	})
})

/* 
describe('/api/print', () => {
	it('POST', async () => {
		const server = app.listen(URL_PORT, () => {
			console.log(`App is listening on port ${URL_PORT}`)
		})
		try {
			const res = await fetch(BASE_URL, { method: 'POST' })
			expect(res.status).toBe(200)
			expect(await res.text()).toBe('POST /')
		} catch (e) {
			throw e
		} finally {
			server.stop()
		}
	})
})
 */
