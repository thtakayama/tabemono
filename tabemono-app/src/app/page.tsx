import Banner from "./components/Banner";
import Paragrafo from "./components/Paragrafo";
import Titulo from "./components/Titulo";
import CardCategorioas from "./components/CardCategorias";
import Receita from "./components/Receita";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner></Banner>
      <section className="p-24">
        <Titulo titulo="Categorias"></Titulo>
        <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae, ipsa tenetur nesciunt quam reiciendis est debitis ratione quia sequi?</Paragrafo>
        <CardCategorioas texto="Lanches" url="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg"></CardCategorioas>c
      </section>
      <section className="p-24">
        <Receita></Receita>
      </section>
    </main>
  );
}
