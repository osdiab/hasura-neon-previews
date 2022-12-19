'use client';

import { UserFragment, User } from "../features/user"
import request from 'graphql-request';
import { graphql } from "../generated/gql";
import { GetUsersQuery, GetUsersQueryVariables } from "../generated/gql/graphql";
import { useLoaderData } from "@remix-run/react";

const getUsersQuery = graphql(`
  query GetUsers {
    auth_user {
      ...UserDetails
    }
  }
`)

export async function loader() {
  return request<GetUsersQuery, GetUsersQueryVariables>('http://localhost:8080/v1/graphql', getUsersQuery, {})
}

export default function Web() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Users</h1>
      {data?.auth_user.map(user => <User key={user.id} user={user} />)}
    </div>
  );
}
