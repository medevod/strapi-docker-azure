module.exports = ({ env }) => ({
  host: env("SERVER_HOST", "0.0.0.0"),
  port: env.int("SERVER_PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", ""),
    },
  },
});
