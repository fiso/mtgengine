"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cunning extends UnimplementedCard {
  constructor(game) {
    super(game, "Cunning", "Exodus", "EXO");
  }
}

module.exports = Cunning;
