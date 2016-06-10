"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FollowedFootsteps extends UnimplementedCard {
  constructor (game) {
    super(game, "Followed Footsteps", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FollowedFootsteps;
