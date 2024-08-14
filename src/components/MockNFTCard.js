import Image from "next/image";
import Link from "next/link";

const MockNFTCard = ({ src, title, price, id, earned }) => {
  return (
    <Link href={"/nfts/" + id}>
      <div className="rounded-xl overflow-hidden relative bg-gray-800 cursor-pointer hover:bg-gray-700 hover:-translate-y-5 transition-all duration-500">
        <div>
          <Image src={src} width={300} height={300} className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-white text-lg font-bold">{price} ETH</p>
          <p className="text-gray-300 text-lg font-semibold">
            Last sale: {(price - 0.1).toFixed(2)} ETH
          </p>
          {earned && (
            <div className="font-bold text-white">Profit: {earned * price}</div>
          )}
          {earned ? (
            <button
              className="mt-5 bg-red-600 font-bold py-3 px-5 rounded-lg text-white"
              type="button"
            >
              Take Profit
            </button>
          ) : (
            <button
              className="mt-5 bg-yellow text-black font-bold py-3 px-5 rounded-lg"
              type="button"
            >
              Stake
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MockNFTCard;
