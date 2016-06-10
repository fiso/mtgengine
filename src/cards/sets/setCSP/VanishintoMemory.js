"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VanishintoMemory extends UnimplementedCard {
  constructor (game) {
    super(game, "Vanish into Memory", "Coldsnap", "CSP");
  }
}

module.exports = VanishintoMemory;
