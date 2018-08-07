"use strict";
const Constants = require ("../../../Constants");
const SoulFeastBase = require("../set10E/SoulFeast");

class SoulFeast extends SoulFeastBase {
  constructor (game) {
    super(game, "Soul Feast", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SoulFeast;
