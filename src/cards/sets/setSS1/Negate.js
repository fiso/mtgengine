"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Negate extends UnimplementedCard {
  constructor (game) {
    super(game, "Negate", "Signature Spellbook: Jace", "SS1");
  }
}

module.exports = Negate;
