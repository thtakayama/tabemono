interface PesquisarProps {
  texto: string;
}

function Pesquisar({texto}: PesquisarProps) {
  return(
    <div className="w-full">
      <input type="text" name="Pesquisar" className="border-2 rounded border-amber-600 outline-0 p-2 w-full " placeholder={texto}/>
    </div>
  )
}

export default Pesquisar;