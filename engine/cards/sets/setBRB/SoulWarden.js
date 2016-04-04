"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulWarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Warden", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SoulWarden;
