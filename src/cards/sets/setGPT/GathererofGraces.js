"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GathererofGraces extends UnimplementedCard {
  constructor(game) {
    super(game, "Gatherer of Graces", "Guildpact", "GPT");
  }
}

module.exports = GathererofGraces;
