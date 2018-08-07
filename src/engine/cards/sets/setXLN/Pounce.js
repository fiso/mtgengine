"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pounce extends UnimplementedCard {
  constructor (game) {
    super(game, "Pounce", "Ixalan", "XLN");
  }
}

module.exports = Pounce;
