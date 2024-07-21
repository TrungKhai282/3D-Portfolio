import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import React from "react";

const MacbookView = dynamic(() => import("@/components/macbook"), {
  ssr: false,
  loading: () => <Loading />,
});

const Page = () => {
  return <MacbookView />;
};

export default Page;
