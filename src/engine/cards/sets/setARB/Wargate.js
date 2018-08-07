"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wargate extends UnimplementedCard {
  constructor (game) {
    super(game, "Wargate", "Alara Reborn", "ARB");
  }
}

module.exports = Wargate;
