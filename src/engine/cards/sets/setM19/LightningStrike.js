"use strict";
const Card = require("../../object/Card");

class LightningStrike extends Card {
  constructor (game) {
    super(game, "Lightning Strike", "Core Set 2019", "M19");
    this.cost = "{1R}";
  }

  resolve (controller, targets) {
    assert(targets.length === 1);
    targets[0].damage(3, this._guid, false);
  }
}

module.exports = LightningStrike;
