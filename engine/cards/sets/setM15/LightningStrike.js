"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Strike", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LightningStrike;
