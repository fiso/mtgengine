"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FillwithFright extends UnimplementedCard {
  constructor (game) {
    super(game, "Fill with Fright", "Fifth Dawn", "5DN");
  }
}

module.exports = FillwithFright;
