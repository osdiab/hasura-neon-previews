/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.user" */
export type Auth_User = {
  __typename?: 'auth_user';
  id: Scalars['uuid'];
  username: Scalars['String'];
};

/** aggregated selection of "auth.user" */
export type Auth_User_Aggregate = {
  __typename?: 'auth_user_aggregate';
  aggregate?: Maybe<Auth_User_Aggregate_Fields>;
  nodes: Array<Auth_User>;
};

/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_Fields = {
  __typename?: 'auth_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_User_Max_Fields>;
  min?: Maybe<Auth_User_Min_Fields>;
};


/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.user". All fields are combined with a logical 'AND'. */
export type Auth_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user" */
export enum Auth_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = 'user_username_key'
}

/** input type for inserting data into table "auth.user" */
export type Auth_User_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_User_Max_Fields = {
  __typename?: 'auth_user_max_fields';
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_User_Min_Fields = {
  __typename?: 'auth_user_min_fields';
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.user" */
export type Auth_User_Mutation_Response = {
  __typename?: 'auth_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User>;
};

/** input type for inserting object relation for remote table "auth.user" */
export type Auth_User_Obj_Rel_Insert_Input = {
  data: Auth_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** on_conflict condition type for table "auth.user" */
export type Auth_User_On_Conflict = {
  constraint: Auth_User_Constraint;
  update_columns?: Array<Auth_User_Update_Column>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user". */
export type Auth_User_Order_By = {
  id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user */
export type Auth_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user" */
export enum Auth_User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "auth.user" */
export type Auth_User_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "auth_user" */
export type Auth_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.user" */
export enum Auth_User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

export type Auth_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_User_Set_Input>;
  where: Auth_User_Bool_Exp;
};

/** columns and relationships of "blog.post" */
export type Blog_Post = {
  __typename?: 'blog_post';
  author_id: Scalars['uuid'];
  body: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Auth_User;
};

/** aggregated selection of "blog.post" */
export type Blog_Post_Aggregate = {
  __typename?: 'blog_post_aggregate';
  aggregate?: Maybe<Blog_Post_Aggregate_Fields>;
  nodes: Array<Blog_Post>;
};

/** aggregate fields of "blog.post" */
export type Blog_Post_Aggregate_Fields = {
  __typename?: 'blog_post_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Blog_Post_Max_Fields>;
  min?: Maybe<Blog_Post_Min_Fields>;
};


/** aggregate fields of "blog.post" */
export type Blog_Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "blog.post". All fields are combined with a logical 'AND'. */
export type Blog_Post_Bool_Exp = {
  _and?: InputMaybe<Array<Blog_Post_Bool_Exp>>;
  _not?: InputMaybe<Blog_Post_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_Post_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
};

/** unique or primary key constraints on table "blog.post" */
export enum Blog_Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostPkey = 'post_pkey'
}

/** input type for inserting data into table "blog.post" */
export type Blog_Post_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Blog_Post_Max_Fields = {
  __typename?: 'blog_post_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Blog_Post_Min_Fields = {
  __typename?: 'blog_post_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "blog.post" */
export type Blog_Post_Mutation_Response = {
  __typename?: 'blog_post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog_Post>;
};

/** on_conflict condition type for table "blog.post" */
export type Blog_Post_On_Conflict = {
  constraint: Blog_Post_Constraint;
  update_columns?: Array<Blog_Post_Update_Column>;
  where?: InputMaybe<Blog_Post_Bool_Exp>;
};

/** Ordering options when selecting data from "blog.post". */
export type Blog_Post_Order_By = {
  author_id?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
};

/** primary key columns input for table: blog.post */
export type Blog_Post_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "blog.post" */
export enum Blog_Post_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "blog.post" */
export type Blog_Post_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "blog_post" */
export type Blog_Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blog_Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blog_Post_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "blog.post" */
export enum Blog_Post_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Blog_Post_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blog_Post_Set_Input>;
  where: Blog_Post_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.user" */
  delete_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** delete single row from the table: "auth.user" */
  delete_auth_user_by_pk?: Maybe<Auth_User>;
  /** delete data from the table: "blog.post" */
  delete_blog_post?: Maybe<Blog_Post_Mutation_Response>;
  /** delete single row from the table: "blog.post" */
  delete_blog_post_by_pk?: Maybe<Blog_Post>;
  /** insert data into the table: "auth.user" */
  insert_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** insert a single row into the table: "auth.user" */
  insert_auth_user_one?: Maybe<Auth_User>;
  /** insert data into the table: "blog.post" */
  insert_blog_post?: Maybe<Blog_Post_Mutation_Response>;
  /** insert a single row into the table: "blog.post" */
  insert_blog_post_one?: Maybe<Blog_Post>;
  /** update data of the table: "auth.user" */
  update_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** update single row of the table: "auth.user" */
  update_auth_user_by_pk?: Maybe<Auth_User>;
  /** update multiples rows of table: "auth.user" */
  update_auth_user_many?: Maybe<Array<Maybe<Auth_User_Mutation_Response>>>;
  /** update data of the table: "blog.post" */
  update_blog_post?: Maybe<Blog_Post_Mutation_Response>;
  /** update single row of the table: "blog.post" */
  update_blog_post_by_pk?: Maybe<Blog_Post>;
  /** update multiples rows of table: "blog.post" */
  update_blog_post_many?: Maybe<Array<Maybe<Blog_Post_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UserArgs = {
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Blog_PostArgs = {
  where: Blog_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blog_Post_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UserArgs = {
  objects: Array<Auth_User_Insert_Input>;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_OneArgs = {
  object: Auth_User_Insert_Input;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_PostArgs = {
  objects: Array<Blog_Post_Insert_Input>;
  on_conflict?: InputMaybe<Blog_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_Post_OneArgs = {
  object: Blog_Post_Insert_Input;
  on_conflict?: InputMaybe<Blog_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UserArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_By_PkArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  pk_columns: Auth_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_ManyArgs = {
  updates: Array<Auth_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_PostArgs = {
  _set?: InputMaybe<Blog_Post_Set_Input>;
  where: Blog_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_Post_By_PkArgs = {
  _set?: InputMaybe<Blog_Post_Set_Input>;
  pk_columns: Blog_Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_Post_ManyArgs = {
  updates: Array<Blog_Post_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table: "blog.post" */
  blog_post: Array<Blog_Post>;
  /** fetch aggregated fields from the table: "blog.post" */
  blog_post_aggregate: Blog_Post_Aggregate;
  /** fetch data from the table: "blog.post" using primary key columns */
  blog_post_by_pk?: Maybe<Blog_Post>;
};


export type Query_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBlog_PostArgs = {
  distinct_on?: InputMaybe<Array<Blog_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Post_Order_By>>;
  where?: InputMaybe<Blog_Post_Bool_Exp>;
};


export type Query_RootBlog_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Post_Order_By>>;
  where?: InputMaybe<Blog_Post_Bool_Exp>;
};


export type Query_RootBlog_Post_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table in a streaming manner: "auth.user" */
  auth_user_stream: Array<Auth_User>;
  /** fetch data from the table: "blog.post" */
  blog_post: Array<Blog_Post>;
  /** fetch aggregated fields from the table: "blog.post" */
  blog_post_aggregate: Blog_Post_Aggregate;
  /** fetch data from the table: "blog.post" using primary key columns */
  blog_post_by_pk?: Maybe<Blog_Post>;
  /** fetch data from the table in a streaming manner: "blog.post" */
  blog_post_stream: Array<Blog_Post>;
};


export type Subscription_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_User_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootBlog_PostArgs = {
  distinct_on?: InputMaybe<Array<Blog_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Post_Order_By>>;
  where?: InputMaybe<Blog_Post_Bool_Exp>;
};


export type Subscription_RootBlog_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Post_Order_By>>;
  where?: InputMaybe<Blog_Post_Bool_Exp>;
};


export type Subscription_RootBlog_Post_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBlog_Post_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Blog_Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Blog_Post_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', auth_user: Array<(
    { __typename?: 'auth_user' }
    & { ' $fragmentRefs'?: { 'UserDetailsFragment': UserDetailsFragment } }
  )> };

export type UserDetailsFragment = { __typename?: 'auth_user', id: any, username: string } & { ' $fragmentName'?: 'UserDetailsFragment' };

export const UserDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"auth_user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<UserDetailsFragment, unknown>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserDetails"}}]}}]}},...UserDetailsFragmentDoc.definitions]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;