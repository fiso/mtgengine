"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Counterspell extends UnimplementedCard {
  constructor (game) {
    super(game, "Counterspell", "Signature Spellbook: Jace", "SS1");
  }
}

module.exports = Counterspell;
