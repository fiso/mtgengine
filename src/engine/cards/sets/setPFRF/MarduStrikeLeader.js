"use strict";
const Constants = require ("../../../Constants");
const MarduStrikeLeaderBase = require("../setFRF/MarduStrikeLeader");

class MarduStrikeLeader extends MarduStrikeLeaderBase {
  constructor (game) {
    super(game, "Mardu Strike Leader", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = MarduStrikeLeader;
