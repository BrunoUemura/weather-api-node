import { join, resolve } from 'path';
import moduleAlias from 'module-alias';

let path = resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': join(path),
  '@utils': join(path, 'utils'),
  '@enums': join(path, 'enums'),
  '@errors': join(path, 'errors'),
  '@routes': join(path, 'routes'),
  '@controllers': join(path, 'controllers'),
  '@services': join(path, 'services'),
  '@models': join(path, 'models'),
});
