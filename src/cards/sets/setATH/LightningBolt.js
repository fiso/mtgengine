"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");
const assert = require("assert");

class LightningBolt extends Card {
  constructor(game) {
    super(game, "Lightning Bolt", "Anthologies", "ATH");
  }

  resolve (controller, targets) {
    assert(targets.length === 1);
    targets[0].damage(3, this._guid, false);
  }
}

module.exports = LightningBolt;
