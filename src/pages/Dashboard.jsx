import React from "react";
import InviteCard from "../features/InviteCoWorkers/components/InviteCard";
import ListingCard from "../features/ListingCoWorkers/components/ListingCard";
import Layout from "../layout";

export default function Dashboard() {
  return (
    <Layout>
      <InviteCard />
      <ListingCard />
    </Layout>
  );
}
