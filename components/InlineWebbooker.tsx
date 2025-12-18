'use client'

export default function InlineWebbooker() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden ring-2 ring-orange-500/20 ring-offset-2 ring-offset-white">
        <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />
        <div
          dangerouslySetInnerHTML={{
            __html: `<inline-webbooker
              formid="650acd888fe8f64502bcb2c9"
              navigation="inline"
              showtopbar="false"
              showlogo="false"
              headercolor="#f97316"
              textcolor="#1e293b"
              backgroundcolor="#ffffff"
              buttonstyle="rounded"
              language="nl"
              style="padding: 12px; --form-row-gap: 4px; --form-column-gap: 4px; --field-margin: 4px; --form-padding: 0px;"
            ></inline-webbooker>`
          }}
        />
      </div>
    </div>
  )
}
