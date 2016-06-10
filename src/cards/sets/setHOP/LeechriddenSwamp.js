"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeechriddenSwamp extends UnimplementedCard {
  constructor (game) {
    super(game, "Leechridden Swamp", "Planechase", "HOP");
  }
}

module.exports = LeechriddenSwamp;
