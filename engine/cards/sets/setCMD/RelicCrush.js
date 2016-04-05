"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicCrush extends UnimplementedCard {
  constructor(game) {
    super(game, "Relic Crush", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RelicCrush;
