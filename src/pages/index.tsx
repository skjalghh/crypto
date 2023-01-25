import { type NextPage } from "next";
import Head from "next/head";

import axios from "axios";
import type { GetStaticProps } from "next";

import type { CryptoDataResponse, Props } from "../utils/types";
import { Table } from "../components/table";
import { useState } from "react";
import { Pagination } from "../components/pagination";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await axios.get(
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"
  );
  const data = res.data as CryptoDataResponse;

  return {
    props: {
      data,
    },
  };
};

const Home: NextPage<Props> = ({ data }: Props) => {
  const pageLimit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalElements = data.Data.Data.length;

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>Aboveit teknisk</title>
        <meta name="description" content="Aboveit teknisk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="container flex flex-col justify-center  px-4 py-16">
          <Table
            data={data}
            pageLimit={pageLimit}
            currentPage={currentPage}
          ></Table>
          <Pagination
            pageLimit={pageLimit}
            totalElements={totalElements}
            changePage={changePage}
          ></Pagination>
        </div>
      </main>
    </>
  );
};

export default Home;
