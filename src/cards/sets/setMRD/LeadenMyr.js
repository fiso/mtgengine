"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeadenMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Leaden Myr", "Mirrodin", "MRD");
  }
}

module.exports = LeadenMyr;
