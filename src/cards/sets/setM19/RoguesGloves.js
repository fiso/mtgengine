"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoguesGloves extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue's Gloves", "Core Set 2019", "M19");
  }
}

module.exports = RoguesGloves;
