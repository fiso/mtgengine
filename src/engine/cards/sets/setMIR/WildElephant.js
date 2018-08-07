"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Elephant", "Mirage", "MIR");
  }
}

module.exports = WildElephant;
