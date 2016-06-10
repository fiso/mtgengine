"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiorasFollower extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiora's Follower", "Born of the Gods", "BNG");
  }
}

module.exports = KiorasFollower;
