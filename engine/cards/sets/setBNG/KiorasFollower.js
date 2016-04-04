"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KiorasFollower extends Card {
  constructor(game) {
    super(game, "Kiora's Follower", "Born of the Gods", "BNG");
  }
}

module.exports = KiorasFollower;
