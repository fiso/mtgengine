'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class ExpeditionEnvoy extends Card {
  constructor (game) {
    super(game, 'Expedition Envoy', 'Battle for Zendikar', 'BFZ');
    this.cost = '{W}';
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 2, 1);
  }
}

module.exports = ExpeditionEnvoy;
