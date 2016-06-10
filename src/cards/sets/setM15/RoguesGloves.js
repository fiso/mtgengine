"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoguesGloves extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue's Gloves", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RoguesGloves;
