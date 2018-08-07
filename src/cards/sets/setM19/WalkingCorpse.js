"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingCorpse extends UnimplementedCard {
  constructor (game) {
    super(game, "Walking Corpse", "Core Set 2019", "M19");
  }
}

module.exports = WalkingCorpse;
