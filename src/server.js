const Hapi = require('@hapi/hapi');

// Mendefinisikan routes
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, world!';
    }
  },
  // Tambahkan route lainnya sesuai kebutuhan
];

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Mengizinkan CORS dari semua sumber
      },
    },
  });

  // Daftarkan routes ke server
  server.route(routes);

  // Mulai server
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
