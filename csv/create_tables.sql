-- make a posts table
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  author VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  url_path VARCHAR(255) NOT NULL,
  published_date timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (url_path)
);
-- make a table for a user
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  notify boolean DEFAULT FALSE,
  name VARCHAR(100),
  lastname VARCHAR(100),
  bio TEXT,
  last_login timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (username),
  UNIQUE (email)
);
-- make a table for a comment
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  post_id int NOT NULL,
  user_id int NOT NULL,
  comment_content TEXT NOT NULL,
  published_date timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
-- make a cross reference table for a post and a user
CREATE TABLE users_posts (
  post_id int NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (post_id, user_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
-- make a table for user images
CREATE TABLE images (
  id BIGSERIAL PRIMARY KEY,
  user_id int NOT NULL,
  image_name VARCHAR(255) NOT NULL,
  image_data BYTEA NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (user_id)
);
