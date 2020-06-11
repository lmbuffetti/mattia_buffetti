import Base from '../config/Base';

import ep from '../../endPoints.constant';

class Content extends Base {
  getDetailPage(id) {
    const url = ep.property.getPage(id);
    return this.apiClient.get(url);
  }

  createPropertyVisit(data) {
    const url = ep.property.createPropertyVisit();
    return this.apiClient.post(url, {}, data);
  }

  getDetailProperty(id) {
    const url = ep.property.getProperty(id);
    return this.apiClient.get(url);
  }

  getDetailPropertyStub(id) {
    const url = ep.property.getPropertyStub(id);
    return this.apiClient.get(url);
  }

  getListedSimplified(data) {
    const url = ep.property.getListedSimplified(data);
    return this.apiClient.get(url);
  }

  getLivingSpaceDistribution(data) {
    const url = ep.property.getLivingSpaceDistribution(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getPriceDistribution(data) {
    const url = ep.property.getPriceDistribution(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getMerged(data) {
    const url = ep.property.getMerged(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getMarketData(data) {
    const url = ep.property.getMarketData(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getPricePerSpace(data) {
    const url = ep.property.getPricePerSpace(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getMarketDays(data) {
    const url = ep.property.getMarketDays(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getContructionYears(data) {
    const url = ep.property.getContructionYears(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getMergedBySubtype(data) {
    const url = ep.property.getMergedBySubtype(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }

  getMaketAggregate(data) {
    const url = ep.property.getMaketAggregate(data);
    const options = { baseUrlType: 'brixeletor', type: 'data' };
    return this.apiClient.get(url, options);
  }
}

export default Content;
