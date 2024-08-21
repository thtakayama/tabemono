interface ParagrafoProps {
  children: string;
}

function Paragrafo({children}: ParagrafoProps) {
  return(
    <>
      <p>{children}</p>
    </>
  )
}

export default Paragrafo;