"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaptorCompanion extends UnimplementedCard {
  constructor (game) {
    super(game, "Raptor Companion", "Battlebond", "BBD");
  }
}

module.exports = RaptorCompanion;
