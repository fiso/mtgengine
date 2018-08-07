"use strict";
const Constants = require ("../../../Constants");
const KiorasFollowerBase = require("../setDDO/KiorasFollower");

class KiorasFollower extends KiorasFollowerBase {
  constructor (game) {
    super(game, "Kiora's Follower", "Born of the Gods Promos", "PBNG");
  }
}

module.exports = KiorasFollower;
