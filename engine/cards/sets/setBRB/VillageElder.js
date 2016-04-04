"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillageElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Village Elder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = VillageElder;
