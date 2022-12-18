'use client';

import { useQuery } from "@tanstack/react-query";
import { UserFragment, User } from "./user"
import request from 'graphql-request';
import { graphql } from "../generated/gql";
import { GetUsersQuery } from "../generated/gql/graphql";

const getUsersQuery = graphql(`
  query GetUsers {
    auth_user {
      ...UserDetails
    }
  }
`)
export default function Web() {
  const { data } = useQuery(['users'] as const, () =>
    request('http://localhost:8080/v1/graphql', getUsersQuery, {})
  )
  console.log({data})

  return (
    <div>
      <h1>Users</h1>
      {data?.auth_user.map(user => <User key={user.id} user={user} />)}
    </div>
  );
}
