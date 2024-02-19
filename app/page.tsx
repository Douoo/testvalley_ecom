import Carousel from "./components/Carousel/Carousel";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Container from "./components/Layouts/Container";
import ProductList from "./components/Products/ProductList";

export default function Home() {
  return (
    <>
      <Container className="sm:bg-white">
        <Header />
        <main>
          <Carousel />
          <Categories />
          <ProductList />
        </main>
      </Container>
    </>
  );
}

{
  /* <Image
src="/vercel.svg"
alt="Vercel Logo"
className="dark:invert"
width={100}
height={24}
priority
/> */
}
