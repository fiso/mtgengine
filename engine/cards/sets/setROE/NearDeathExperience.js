"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NearDeathExperience extends Card {
  constructor(game) {
    super(game, "Near-Death Experience", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NearDeathExperience;
