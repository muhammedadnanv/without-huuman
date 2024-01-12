// tor-api-lib.js

const axios = require('axios');
const SocksProxyAgent = require('socks-proxy-agent');

class TorAPILib {
  constructor(torProxyUrl) {
    this.torProxyUrl = torProxyUrl;
    this.axiosInstance = axios.create({
      httpAgent: new SocksProxyAgent(torProxyUrl),
      httpsAgent: new SocksProxyAgent(torProxyUrl),
    });
  }

  async makeTorRequest(url, options = {}) {
    try {
      const response = await this.axiosInstance.request({
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Error making Tor request to ${url}: ${error.message}`);
    }
  }

  // Add more methods for handling different functionalities,
  // such as authentication, error handling, etc.
}

module.exports = TorAPILib;
