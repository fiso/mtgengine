"use strict";
const Constants = require ("../../../Constants");
const FollowedFootstepsBase = require("../setCN2/FollowedFootsteps");

class FollowedFootsteps extends FollowedFootstepsBase {
  constructor (game) {
    super(game, "Followed Footsteps", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FollowedFootsteps;
