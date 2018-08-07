"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Arc Lightning", "Ugin's Fate", "UGIN");
  }
}

module.exports = ArcLightning;
