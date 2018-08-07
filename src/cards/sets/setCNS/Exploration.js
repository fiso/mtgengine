"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exploration extends UnimplementedCard {
  constructor (game) {
    super(game, "Exploration", "Conspiracy", "CNS");
  }
}

module.exports = Exploration;
