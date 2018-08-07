"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MandatoryFriendshipShackles extends UnimplementedCard {
  constructor (game) {
    super(game, "Mandatory Friendship Shackles", "Unstable", "UST");
  }
}

module.exports = MandatoryFriendshipShackles;
