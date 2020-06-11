import ApiClient from './ApiClient';

import Content from '../actions/Content';

function apiFactory(
  {
    baseURL
  },
) {
  const api = new ApiClient({ baseURL });

  return {
    content: new Content({ apiClient: api }),
  };
}

const  baseURL = '/';

export default apiFactory({
  baseURL,
});
