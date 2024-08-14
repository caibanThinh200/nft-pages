import Image from "next/image";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import { useRouter } from "next/router";
import { MOCK_DATA } from ".";
import { Button, Slider, Stack } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const NFTItem = (props) => {
  const router = useRouter();
  const nftData = MOCK_DATA.find(
    (data) => data?.key?.toString() === router?.query?.id
  );
  const [value, setValue] = useState(0);

  return (
    <>
      <Head>
        <title>Dusty Vaults | {nftData?.title}</title>
        <meta name="description" content="NFT Bank" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ƒ<Header> </Header>
      <div className="container text-white py-32">
        <div className="mb-10 cursor-pointer">
          <Link href={"/nfts"}>
            <p className="font-bold text-xl flex gap-2 items-center">
              <svg
                width="11"
                height="21"
                viewBox="0 0 11 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7271 2.187C10.8173 2.09153 10.8878 1.97923 10.9347 1.8565C10.9815 1.73377 11.0037 1.60302 10.9999 1.47172C10.9962 1.34042 10.9667 1.21113 10.913 1.09125C10.8593 0.971362 10.7826 0.863223 10.6871 0.773005C10.5916 0.682787 10.4793 0.612257 10.3566 0.565441C10.2339 0.518626 10.1031 0.496442 9.97181 0.500156C9.84051 0.50387 9.71123 0.53341 9.59134 0.587089C9.47146 0.640767 9.36332 0.717534 9.2731 0.813005L0.773098 9.813C0.597562 9.99867 0.499756 10.2445 0.499756 10.5C0.499756 10.7555 0.597562 11.0013 0.773098 11.187L9.2731 20.188C9.36272 20.2856 9.47084 20.3643 9.59116 20.4198C9.71149 20.4752 9.84163 20.5062 9.97402 20.5109C10.1064 20.5156 10.2384 20.4939 10.3624 20.4472C10.4863 20.4004 10.5998 20.3295 10.6961 20.2386C10.7924 20.1476 10.8697 20.0384 10.9235 19.9173C10.9772 19.7963 11.0064 19.6657 11.0093 19.5333C11.0122 19.4008 10.9887 19.2691 10.9403 19.1458C10.8918 19.0225 10.8194 18.9101 10.7271 18.815L2.8751 10.5L10.7271 2.187Z"
                  fill="#fff"
                />
              </svg>{" "}
              Back
            </p>
          </Link>
        </div>
        <div className=" mx-auto">
          <div className="flex gap-10">
            {/* Product Image */}
            <div className="relative h-96 w-full flex-1">
              {nftData?.src && (
                <Image
                  src={nftData?.src} // Update with your image path
                  alt={nftData?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              )}
            </div>

            {/* Product Details */}
            <div className="mt-6 flex-1">
              <h1 className="text-3xl font-bold">{nftData?.title}</h1>
              <p className="mt-2 text-gray-400">Owned by RoulioL</p>
              <p className="mt-4">347 views | 7 favorites</p>

              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-gray-400">
                  Sale ends August 19, 2024 at 9:57 PM
                </p>

                {/* <div className="mt-6 flex space-x-4">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                    Buy now
                  </button>
                  <button className="bg-gray-700 text-white px-6 py-2 rounded-lg">
                    Make offer
                  </button>
                </div> */}
                <div>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ mb: 1 }}
                    alignItems="center"
                  >
                    {/* <VolumeDown /> */}
                    <Slider
                      aria-label="Volume"
                      value={value}
                      onChange={(e) => setValue(e?.target?.value)}
                    />
                    {/* <VolumeUp /> */}
                  </Stack>
                </div>
                <div className="flex items-center mt-4">
                  <p className="text-2xl font-semibold">${value}</p>
                  {/* <p className="ml-2 text-gray-400">(${value})</p> */}
                </div>
                <button
                  onClick={() => router.push("/earns")}
                  className="mt-5 bg-yellow text-black font-bold py-3 px-5 rounded-lg"
                  type="button"
                >
                  Stake
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTItem;
