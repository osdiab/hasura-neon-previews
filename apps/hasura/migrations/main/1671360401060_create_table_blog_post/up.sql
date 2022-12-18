CREATE TABLE "blog"."post" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "author_id" uuid NOT NULL, "title" text NOT NULL, "body" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "auth"."user"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "blog"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_blog_post_updated_at"
BEFORE UPDATE ON "blog"."post"
FOR EACH ROW
EXECUTE PROCEDURE "blog"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_blog_post_updated_at" ON "blog"."post" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
