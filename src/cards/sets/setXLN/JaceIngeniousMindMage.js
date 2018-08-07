"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceIngeniousMindMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Ingenious Mind-Mage", "Ixalan", "XLN");
  }
}

module.exports = JaceIngeniousMindMage;
