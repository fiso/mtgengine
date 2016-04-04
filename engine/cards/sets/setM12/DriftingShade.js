"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DriftingShade extends Card {
  constructor(game) {
    super(game, "Drifting Shade", "Magic 2012", "M12");
  }
}

module.exports = DriftingShade;
