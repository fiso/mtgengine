"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerraStomper extends UnimplementedCard {
  constructor (game) {
    super(game, "Terra Stomper", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TerraStomper;
