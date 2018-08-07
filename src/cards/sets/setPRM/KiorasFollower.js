"use strict";
const Constants = require ("../../../Constants");
const KiorasFollowerBase = require("../setDDO/KiorasFollower");

class KiorasFollower extends KiorasFollowerBase {
  constructor (game) {
    super(game, "Kiora's Follower", "Magic Online Promos", "PRM");
  }
}

module.exports = KiorasFollower;
