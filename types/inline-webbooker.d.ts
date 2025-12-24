declare namespace JSX {
  interface IntrinsicElements {
    'inline-webbooker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      formid?: string
      navigation?: string
      showtopbar?: string
      showlogo?: string
      headercolor?: string
      textcolor?: string
      backgroundcolor?: string
      buttonstyle?: string
      language?: string
    }
  }
}
