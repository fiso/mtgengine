"use strict";
const Constants = require ("../../../Constants");
const SoulFeastBase = require("../set8ED/SoulFeast");

class SoulFeast extends SoulFeastBase {
  constructor (game) {
    super(game, "Soul Feast", "Starter 1999", "S99");
  }
}

module.exports = SoulFeast;
