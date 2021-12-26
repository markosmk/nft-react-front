import axios from 'axios';
const API_URL = 'https://api.opensea.io/api/v1';

// for GET requests
axios.defaults.headers.get['X-API-KEY'] = process.env.REACT_APP_API_KEY;

// For Home and Owner
export async function getOWner(address, offset = 0, limit = 20) {
  return await axios.get(`${API_URL}/assets`, {
    params: {
      asset_contract_address: address,
      order_direction: 'asc',
      offset,
      limit,
    },
  });
}

// for itemNft
export async function getItem(address, token) {
  return await axios.get(`${API_URL}/asset/${address}/${token}/`);
}
