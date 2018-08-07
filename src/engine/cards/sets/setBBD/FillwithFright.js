"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FillwithFright extends UnimplementedCard {
  constructor (game) {
    super(game, "Fill with Fright", "Battlebond", "BBD");
  }
}

module.exports = FillwithFright;
