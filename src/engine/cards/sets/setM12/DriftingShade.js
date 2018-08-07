"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DriftingShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Drifting Shade", "Magic 2012", "M12");
  }
}

module.exports = DriftingShade;
