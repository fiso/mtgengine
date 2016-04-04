"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cartographer extends UnimplementedCard {
  constructor(game) {
    super(game, "Cartographer", "Exodus", "EXO");
  }
}

module.exports = Cartographer;
