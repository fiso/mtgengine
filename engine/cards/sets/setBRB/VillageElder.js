"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillageElder extends Card {
  constructor(game) {
    super(game, "Village Elder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = VillageElder;
