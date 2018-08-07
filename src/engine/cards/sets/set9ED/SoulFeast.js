"use strict";
const Constants = require ("../../../Constants");
const SoulFeastBase = require("../set10E/SoulFeast");

class SoulFeast extends SoulFeastBase {
  constructor (game) {
    super(game, "Soul Feast", "Ninth Edition", "9ED");
  }
}

module.exports = SoulFeast;
