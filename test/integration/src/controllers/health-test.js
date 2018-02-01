'use strict';

const config = require('config');
const {expect} = require('chai');
const target = require('../../../../src/controllers/health');
const pkg = require('../../../../package');

describe('', () => {
  it('', () => {
    const server = target.getHealth();
    expect(server).to.have.property('name', pkg.name);
    expect(server).to.have.property('version', pkg.version);
    expect(server).to.have.property('host', config.server.host);
    expect(server).to.have.property('port', config.server.port);
    expect(server).to.have.property('systemInfo').and.to.be.an('object');

    const sysInfo = server.systemInfo;
    expect(sysInfo).to.have.property('cpuLoad').and.to.be.an('array');
    expect(sysInfo).to.have.property('memory').and.to.be.an('object');

    const memory = sysInfo.memory;
    expect(memory).to.have.property('free').and.to.be.an('object');
    expect(memory).to.have.property('total').and.to.be.an('object');
    expect(memory).to.have.property('percentage').and.to.be.an('object');

    Object.keys(memory).forEach((key) => {
      expect(memory[key]).to.have.property('pretty').and.to.be.a('string');
      expect(memory[key]).to.have.property('raw').and.to.be.a('number');
    });

    expect(server).to.have.property('dependencies').and.to.be.an('object');
  });
});
