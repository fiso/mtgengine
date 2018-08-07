"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Dragon", "Core Set 2019", "M19");
  }
}

module.exports = BoneDragon;
