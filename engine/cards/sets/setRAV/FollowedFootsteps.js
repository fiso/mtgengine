"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FollowedFootsteps extends Card {
  constructor(game) {
    super(game, "Followed Footsteps", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FollowedFootsteps;
