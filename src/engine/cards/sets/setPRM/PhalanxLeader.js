"use strict";
const Constants = require ("../../../Constants");
const PhalanxLeaderBase = require("../setTHS/PhalanxLeader");

class PhalanxLeader extends PhalanxLeaderBase {
  constructor (game) {
    super(game, "Phalanx Leader", "Magic Online Promos", "PRM");
  }
}

module.exports = PhalanxLeader;
