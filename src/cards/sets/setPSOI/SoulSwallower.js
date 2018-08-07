"use strict";
const Constants = require ("../../../Constants");
const SoulSwallowerBase = require("../setSOI/SoulSwallower");

class SoulSwallower extends SoulSwallowerBase {
  constructor (game) {
    super(game, "Soul Swallower", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SoulSwallower;
