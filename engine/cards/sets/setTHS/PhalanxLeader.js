"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhalanxLeaderBase = require("../setpMGD/PhalanxLeader.js");

class PhalanxLeader extends PhalanxLeaderBase {
  constructor(game) {
    super(game, "Phalanx Leader", "Theros", "THS");
  }
}

module.exports = PhalanxLeader;
