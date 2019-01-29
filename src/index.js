import { use } from '@rndm/render';
import methods from './methods';

const plugin = {
  key: 'validator',
  methods,
};

use(plugin);

export default plugin;
