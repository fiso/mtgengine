"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Seer", "Guildpact", "GPT");
  }
}

module.exports = CrystalSeer;
