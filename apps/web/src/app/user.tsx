import { FragmentType, graphql, useFragment } from "../generated/gql";

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
    const user = useFragment(UserFragment, props.user);
    return <div>
        <span>{user.username}</span>
    </div>;
}
