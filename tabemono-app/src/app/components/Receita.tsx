import Titulo from "./Titulo";

function Receita() {
  const ingredientes = ['4 ovos', '2 colheres (sopa) de manteiga', '2 xícaras (chá) de açúcar', '1 xícara (chá) de leite', '4 colheres (sopa) de chocolate em pó', '3 xícaras (chá) de farinha de trigo', '2 colheres (sopa) de fermento'];
  const preparo = ['Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.', 'Adicione o fermento e misture com uma espátula delicadamente.', 'Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.']
  return(
    <>
      <Titulo titulo="Bolo de chocolate"></Titulo>
      <div><img/></div>
      <div>
        <div>
          <img/>
          <h4>Tempo de preparo</h4>
        </div>
        <div>
          <img/>
          <h4>Quantidade</h4>
        </div>
      </div>
      <div>
        <ul className="list-disc">
          {ingredientes.map((ingrediente)=> <li key={ingrediente} className="list-item"><p>{ingrediente}</p></li>)}
        </ul>
      </div>
      <div>
        <ol>
          {preparo.map(prep=> <li key={prep} className="border-b-2 py-4"><p>{prep}</p></li>)}
        </ol>
      </div>
    </>
  )
}

export default Receita;