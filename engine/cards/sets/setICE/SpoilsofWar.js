"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpoilsofWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Spoils of War", "Ice Age", "ICE");
  }
}

module.exports = SpoilsofWar;
