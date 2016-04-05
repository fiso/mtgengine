"use strict";
const Constants = require ("../../../Constants");
const KiorasFollowerBase = require("../setBNG/KiorasFollower");

class KiorasFollower extends KiorasFollowerBase {
  constructor(game) {
    super(game, "Kiora's Follower", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KiorasFollower;
