"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofJubilation extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Jubilation", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelofJubilation;
