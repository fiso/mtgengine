"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Dragon", "Prerelease Events", "pPRE");
  }
}

module.exports = LightningDragon;
