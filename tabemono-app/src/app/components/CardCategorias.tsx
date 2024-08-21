import Image from 'next/image'

interface CardCategoriasProps {
  texto: string;
  url: string;
}

function CardCategorias({texto, url} : CardCategoriasProps) {
  return (
    <div className="w-96 h-96 rounded-lg overflow-hidden bg-blue-500">
       <img
      src={url}
     className="relative" width="100%"/>
      <h3>{texto}</h3>
    </div>
  )
}

export default CardCategorias;