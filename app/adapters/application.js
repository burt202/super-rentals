import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'super-rentals/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    const url = super.buildURL(...args).slice(1);
    return `${config.rootURL}${url}.json`;
  }
}
