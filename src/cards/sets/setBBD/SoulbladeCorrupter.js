"use strict";
const Constants = require ("../../../Constants");
const SoulbladeCorrupterBase = require("../setPBBD/SoulbladeCorrupter");

class SoulbladeCorrupter extends SoulbladeCorrupterBase {
  constructor (game) {
    super(game, "Soulblade Corrupter", "Battlebond", "BBD");
  }
}

module.exports = SoulbladeCorrupter;
