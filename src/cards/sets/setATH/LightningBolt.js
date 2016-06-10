"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class LightningBolt extends Card {
  constructor (game) {
    super(game, "Lightning Bolt", "Anthologies", "ATH");
    this.cost = "{R}";
  }

  resolve (controller, targets) {
    assert(targets.length === 1);
    targets[0].damage(3, this._guid, false);
  }
}

module.exports = LightningBolt;
