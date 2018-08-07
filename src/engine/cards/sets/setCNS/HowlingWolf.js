"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Wolf", "Conspiracy", "CNS");
  }
}

module.exports = HowlingWolf;
