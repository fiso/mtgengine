"use strict";
const Constants = require ("../../../Constants");
const SoulflayerBase = require("../setFRF/Soulflayer");

class Soulflayer extends SoulflayerBase {
  constructor (game) {
    super(game, "Soulflayer", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = Soulflayer;
