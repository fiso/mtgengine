"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manabond extends UnimplementedCard {
  constructor(game) {
    super(game, "Manabond", "Exodus", "EXO");
  }
}

module.exports = Manabond;
