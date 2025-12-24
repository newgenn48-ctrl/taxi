'use client'

export default function InlineWebbooker() {
  return (
    // @ts-expect-error - inline-webbooker is a custom web component
    <inline-webbooker
      formid="650acd888fe8f64502bcb2c9"
      navigation="inline"
      showtopbar="false"
      showlogo="false"
      headercolor="#eab308"
      textcolor="#1e293b"
      backgroundcolor="#ffffff"
      buttonstyle="rounded"
      language="nl"
      style={{ display: 'block', width: '100%' }}
    />
  )
}
