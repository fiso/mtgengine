"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighGround extends UnimplementedCard {
  constructor (game) {
    super(game, "High Ground", "Exodus", "EXO");
  }
}

module.exports = HighGround;
