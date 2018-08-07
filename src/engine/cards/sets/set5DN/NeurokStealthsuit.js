'use strict';
const Constants = require('../../../Constants');
const NeurokStealthsuitBase = require('../setTD2/NeurokStealthsuit');

class NeurokStealthsuit extends NeurokStealthsuitBase {
  constructor (game) {
    super(game, 'Neurok Stealthsuit', 'Fifth Dawn', '5DN');
  }
}

module.exports = NeurokStealthsuit;
