"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Matrix", "Darksteel", "DST");
  }
}

module.exports = MyrMatrix;
