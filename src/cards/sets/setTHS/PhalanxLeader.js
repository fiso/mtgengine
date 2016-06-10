"use strict";
const Constants = require ("../../../Constants");
const PhalanxLeaderBase = require("../setpMGD/PhalanxLeader");

class PhalanxLeader extends PhalanxLeaderBase {
  constructor (game) {
    super(game, "Phalanx Leader", "Theros", "THS");
  }
}

module.exports = PhalanxLeader;
