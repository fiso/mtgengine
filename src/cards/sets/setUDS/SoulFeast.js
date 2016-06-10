"use strict";
const Constants = require ("../../../Constants");
const SoulFeastBase = require("../set8ED/SoulFeast");

class SoulFeast extends SoulFeastBase {
  constructor (game) {
    super(game, "Soul Feast", "Urza's Destiny", "UDS");
  }
}

module.exports = SoulFeast;
