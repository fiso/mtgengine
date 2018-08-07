'use strict';
const Constants = require('../../../Constants');
const TunnelBase = require('../set4ED/Tunnel');

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, 'Tunnel', 'Revised Edition', '3ED');
  }
}

module.exports = Tunnel;
