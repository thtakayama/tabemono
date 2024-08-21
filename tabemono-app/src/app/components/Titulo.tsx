interface TituloProps {
  titulo: string;
}

function Titulo({titulo}: TituloProps) {
  return(
    <>
      <h1 className="mb-2">{titulo}</h1>
    </>
  )
}

export default Titulo;