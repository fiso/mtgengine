"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildBeastmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Beastmaster", "Return to Ravnica", "RTR");
  }
}

module.exports = WildBeastmaster;
