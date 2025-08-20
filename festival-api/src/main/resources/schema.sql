-- Schema initialization for PostgreSQL database 'festi'
-- This will run on app startup because spring.sql.init.mode=always

CREATE TABLE IF NOT EXISTS festival (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date VARCHAR(50) NOT NULL
);

-- Helpful index for read patterns
CREATE INDEX IF NOT EXISTS idx_festival_date ON festival (date);
