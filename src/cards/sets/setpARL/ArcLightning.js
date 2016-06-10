"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Arc Lightning", "Arena League", "pARL");
  }
}

module.exports = ArcLightning;
