export const template = ` 
<?xml version="1.0" encoding="UTF-8"?>
<document>
  <align mode="center">
    <bold>
      <text-line size="1:0">TEAM CELLMANIA</text-line>
    </bold>
  </align>

<underline />
  {{#isWednesday}} <align mode="center">
    <bold>
      <text-line size="1:0">***HOY MICA GRATIS***</text-line>
    </bold>
  </align> {{/isWednesday}} <underline />

<line-feed />
<align
    mode="right">
    <text-line size="0:0">No. {{order_number}}</text-line>
  </align>

<line-feed />

<align mode="left">
    <text size="0:0">Cliente: {{name}}</text>
    <text size="0:0">C.I: {{customer}}</text>
    <text size="0:0">Fecha: {{receivedAt}}</text>
  </align>

<align mode="right">
    <text size="0:0">Dispositivo </text>
    <text size="0:0">{{device}} </text>
    <text size="0:0">IMEI: {{imei}}</text>
  </align>

<column mode="left">
    <text size="0:0">Cliente: {{name}}</text>
    <text size="0:0">C.I: {{customer}}</text>
    <text size="0:0">Fecha: {{receivedAt}}</text>
  </column>

<column mode="right">
    <row>
      <text size="0:0">Dispositivo </text>
    </row>
    <text size="0:0">{{device}} </text>
    <text size="0:0">IMEI: {{imei}}</text>
  </column>

<line-feed />

<align mode="left">
    <text-line size="0:0">Motivo de Ingreso: {{notes}}</text-line>
  </align>

<align mode="center">
    <text-line size="0:0">ANALISIS VISUAL</text-line>
  </align>

<align mode="center">
  </align>

<line-feed />

<align mode="left">
    <text-line size="0:0">Recibido por: {{received_by}} - {{received_by_phone}}</text-line>
  </align>

<align
    mode="center">
    <text-line size="0:0"> Escanee el código QR para ver el estado de su orden </text-line>
  </align>


  <break-line />

<align
    mode="center">
    <qrcode ecl="L" size="3">{{baseOrderURL}}/my-order/{{order_number}}</qrcode>
  </align>

<line-feed />

<small>
    <align mode="left">
      <text size="0:0">- El costo mínimo de revisión es de $4, este valor podría incrementar dependiendo del modelo de su dispositivo.</text>
      <line-feed />
      <text size="0:0">- Recuerde: En la revisión de su dispositivo utilizamos materiales, herramientas y tiempo de trabajo.</text>
      <text size="0:0">- El tiempo máximo para retirar su dispositivo es de 3 meses.</text>
    </align>
  </small>

<paper-cut />

<align
    mode="center">
    <bold>
      <text-line size="1:0">TEAM CELLMANIA</text-line>
    </bold>
  </align> {{#isWednesday}} <underline />
<align
    mode="center">
    <bold>
      <text-line size="1:0">***HOY MICA GRATIS***</text-line>
    </bold>
  </align>
<underline />
  {{/isWednesday}} <align mode="center">
    <text size="0:0">{{receivedAt}}</text>
    <text-line size="0:0"> No. {{order_number}}</text-line>
  </align>

<line-feed />

<align mode="left">
    <bold>
      <text size="0:0">Cliente: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{name}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">Dispositivo: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{device}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">IMEI: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{imei}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">Contacto: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{contact}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">Pin/Password: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{keyword}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">Patrón: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{pattern}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">Motivo de Ingreso: </text>
    </bold>
  </align>
<align mode="left">
    <text-line size="0:0"> {{notes}}</text-line>
  </align>

<align mode="left">
    <bold>
      <text size="0:0">Sucursal:</text>
    </bold>
  </align>
<align mode="left">
    <text size="0:0">{{branch}}.
    </text>
  </align>

  <align mode="left">
    <text size="0:0">Recibe: </text>
  </align>
  <align mode="left">
    <text-line size=" 0:0">{{received_by}}</text-line>
  </align>

  <paper-cut />
</document>
`
