import { ApiClient } from './client'
import { AxiosResponse } from 'axios';

export function getLastPrice(): Promise<any> {
  return new ApiClient().get({ url: 'stats'}).then((result: AxiosResponse<any>) => {
    return result.data;
  });
}