"use strict";
const Constants = require ("../../../Constants");
const NearDeathExperienceBase = require("../setV16/NearDeathExperience");

class NearDeathExperience extends NearDeathExperienceBase {
  constructor (game) {
    super(game, "Near-Death Experience", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NearDeathExperience;
