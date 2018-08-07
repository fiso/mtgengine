"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Strike", "Core Set 2019", "M19");
  }
}

module.exports = LightningStrike;
