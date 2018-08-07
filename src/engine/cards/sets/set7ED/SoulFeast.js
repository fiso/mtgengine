"use strict";
const Constants = require ("../../../Constants");
const SoulFeastBase = require("../set10E/SoulFeast");

class SoulFeast extends SoulFeastBase {
  constructor (game) {
    super(game, "Soul Feast", "Seventh Edition", "7ED");
  }
}

module.exports = SoulFeast;
