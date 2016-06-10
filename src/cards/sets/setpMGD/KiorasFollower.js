"use strict";
const Constants = require ("../../../Constants");
const KiorasFollowerBase = require("../setBNG/KiorasFollower");

class KiorasFollower extends KiorasFollowerBase {
  constructor (game) {
    super(game, "Kiora's Follower", "Magic Game Day", "pMGD");
  }
}

module.exports = KiorasFollower;
