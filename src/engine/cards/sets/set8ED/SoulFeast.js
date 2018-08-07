"use strict";
const Constants = require ("../../../Constants");
const SoulFeastBase = require("../set10E/SoulFeast");

class SoulFeast extends SoulFeastBase {
  constructor (game) {
    super(game, "Soul Feast", "Eighth Edition", "8ED");
  }
}

module.exports = SoulFeast;
