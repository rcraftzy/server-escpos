export const template = ` 
<?xml version="1.0" encoding="UTF-8"?>
<document>
  <align mode="center">
    <bold>
      <text-line size="1:0">TEAM CELLMANIA</text-line>
    </bold>
  </align>

  <underline-text /> 
  {{#if isWednesday}}
    <align
      mode="center">
      <bold>
        <text-line size="1:0">***HOY MICA GRATIS***</text-line>
      </bold>
    </align>
  {{/if}} 
  <underline-text />

  <line-feed />

  <align
    mode="right">
    <text-line size="0:0">No. {{order_number}}</text-line>
  </align>

  <line-feed />

  <align mode="left">
    <text-line size="0:0">Cliente: {{name}}</text-line>
    <text-line size="0:0">C.I: {{customer}}</text-line>
    <text-line size="0:0">Fecha: {{receivedAt}}</text-line>
  </align>

  <align mode="right">
    <text-line size="0:0">Dispositivo </text-line>
    <text-line size="0:0">{{device}} </text-line>
    <text-line size="0:0">IMEI: {{imei}}</text-line>
  </align>

  <line-feed />

  <align mode="left">
    <text-line size="0:0">Motivo de Ingreso: {{notes}}</text-line>
  </align>

  <align mode="center">
    <text-line size="0:0">ANALISIS VISUAL</text-line>
    <image density="d24">
      {{base64PngImage}}
    </image>
  </align>

  <line-feed />

  <align mode="left">
    <text-line size="0:0">Recibido por: {{received_by}} - {{received_by_phone}}</text-line>
  </align>

  <line-feed />

  <align
    mode="left">
    <text-line size="0:0"> Escanee el código QR para ver el estado de su orden </text-line>
  </align>

  <underline-text />

  <align
    mode="center">
    <qrcode ecl="M">{{baseOrderURL}}/my-order/{{order_number}}</qrcode>
  </align>

  <align mode="left">
    <text-line size="0:0">
      - El costo mínimo de revisión es de $4, este valor podría incrementar dependiendo del modelo
      de su dispositivo
      - Recuerde: En la revisión de su dispositivo utilizamos materiales, herramientas y tiempo de
  trabajo.
      - El tiempo máximo para retirar su dispositivo es de 3 meses.
    </text-line>
  </align>

  <paper-cut />

  <align
    mode="center">
    <bold>
      <text-line size="1:0">TEAM CELLMANIA</text-line>
    </bold>
  </align>

  <underline-text /> 
  {{#if isWednesday}}
    <align
      mode="center">
      <bold>
        <text-line size="1:0">***HOY MICA GRATIS***</text-line>
      </bold>
    </align>
  {{/if}} 
  <underline-text />

  <align
    mode="left">
    <text-line size="1:0">{{receivedAt}}</text-line>
  </align>
  <align mode="right">
    <text-line size="1:0">No. {{order_number}}</text-line>
  </align>
  <align mode="left">
    <text-line size="0:0">Cliente: {{name}}</text-line>
    <text-line size="0:0">Dispositivo: {{device}}</text-line>
    <text-line size="0:0">IMEI: {{imei}}</text-line>
    <text-line size="0:0">Contacto: {{contact}}</text-line>
    <text-line size="0:0">Pin/Password: {{keyword}}</text-line>
    <text-line size="0:0">Patrón: {{pattern}}</text-line>
  </align>

  <align mode="left">
    <text-line size="0:0">Motivo de Ingreso: {{notes}}</text-line>
  </align>

  <align mode="left">
    <text-line size="0:0">Sucursal: {{branch}}</text-line>
  </align>
  <align mode="right">
    <text-line size="0:0">Recibe: {{received_by}}</text-line>
  </align>

  <paper-cut />
</document>
`
