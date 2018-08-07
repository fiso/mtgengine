"use strict";
const UnimplementedCard = require("../../UnimplementedCard");

class Shock extends UnimplementedCard {
  constructor (game) {
    super(game, "Shock", "Core Set 2019", "M19");
    this.cost = "{R}";
  }

  resolve (controller, targets) {
    assert(targets.length === 1);
    targets[0].damage(2, this._guid, false);
  }
}

module.exports = Shock;
