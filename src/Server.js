const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

router.db._.push({ users: [] });

router.post('/users', (req, res) => {
  const { username, password } = req.body;

  router.db.get('users')
    .push({ username, password })
    .write();

  res.status(201).json({ message: 'User created successfully' });
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
