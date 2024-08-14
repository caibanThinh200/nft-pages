import Head from "next/head";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import MockNFTCard from "../../components/MockNFTCard";
import Sidebar from "../../components/Sidebar";

export const MOCK_DATA = [
  { key: 1, title: "It All Connects", price: 0.4, src: "/nfts/nft-1.avif" },
  { key: 2, title: "Show Up", price: 0.6, src: "/nfts/nft-2.avif" },
  { key: 3, title: "Take A Break", price: 0.9, src: "/nfts/nft-3.avif" },
  {
    key: 4,
    title: "Stillness Between Moments",
    price: 0.2,
    src: "/nfts/nft-4.avif",
  },
  { key: 5, title: "It Takes Focus", price: 0.1, src: "/nfts/nft-5.avif" },
  {
    key: 6,
    title: "In Time All Is Yours",
    price: 0.4,
    src: "/nfts/nft-6.avif",
  },
];

const List = () => {
  return (
    <>
      <Head>
        <title>Dusty Vaults | Collections</title>
        <meta name="description" content="NFT Bank" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent>
        <Sidebar />
        <div className="container py-32 page-content">
          <h1 className="!text-white font-bold text-center text-3xl mb-20">
            NFT Collections
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
            {MOCK_DATA.map((data) => {
              return <MockNFTCard {...data} id={data?.key} />;
            })}
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default List;
