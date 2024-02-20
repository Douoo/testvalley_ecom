import Carousel from "./components/Carousel/Carousel";
import Categories from "./components/Categories/Categories";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import Header from "./components/Header/Header";
import Image from "next/image";
import Container from "./components/Layouts/Container";
import ProductList from "./components/ProductList/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container className="sm:bg-white">
          <Carousel />
          <Categories />
          <ProductList />
          <FloatingButton enableBadge={true}>
            <Image
              src="/channeltalk.png"
              width={48}
              height={48}
              alt="chat with support"
            />
          </FloatingButton>
        </Container>
      </main>
    </>
  );
}
