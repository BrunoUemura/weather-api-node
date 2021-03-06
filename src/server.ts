import 'dotenv/config';
import { server } from './config/ServerConfig';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
