"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceBeleren extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace Beleren", "Signature Spellbook: Jace", "SS1");
  }
}

module.exports = JaceBeleren;
