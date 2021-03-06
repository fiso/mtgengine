'use strict';
const Constants = require('../../../Constants');
const EnergyFluxBase = require('../setME4/EnergyFlux');

class EnergyFlux extends EnergyFluxBase {
  constructor (game) {
    super(game, 'Energy Flux', 'Fifth Edition', '5ED');
  }
}

module.exports = EnergyFlux;
