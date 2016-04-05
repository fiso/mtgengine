"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Onslaught extends UnimplementedCard {
  constructor(game) {
    super(game, "Onslaught", "Exodus", "EXO");
  }
}

module.exports = Onslaught;
