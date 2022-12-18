CREATE TABLE "auth"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "username" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("username"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
