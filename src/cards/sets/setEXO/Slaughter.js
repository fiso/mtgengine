"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Slaughter extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaughter", "Exodus", "EXO");
  }
}

module.exports = Slaughter;
