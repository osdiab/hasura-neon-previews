import { FragmentType, graphql, getFragmentData } from "../generated/gql";

export const UserFragment = graphql(`
  fragment UserDetails on auth_user {
    id
    username
  }
`)

interface UserProps {
    user: FragmentType<typeof UserFragment>
}
export function User(props: UserProps) {
    const user = getFragmentData(UserFragment, props.user);
    return <div>
        <span>{user.username}</span>
    </div>;
}
