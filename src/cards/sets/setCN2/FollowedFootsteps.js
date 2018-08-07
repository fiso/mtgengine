"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FollowedFootsteps extends UnimplementedCard {
  constructor (game) {
    super(game, "Followed Footsteps", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FollowedFootsteps;
