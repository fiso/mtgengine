"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const assert = require("assert");

class LightningBolt extends Card {
  constructor(game) {
    super(game, "Lightning Bolt");
  }

  resolve (controller, targets) {
    this._game.log("Lightning Bolt resolves");
    assert(targets.length === 1);
    targets[0].damage(3, this._guid, false);
  }

  get cost () {
    let cost = {
      mana: {}
    };
    cost["mana"][Constants.costs.RED] = 1;
    return cost;
  }
}

module.exports = LightningBolt;
