"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NearDeathExperience extends UnimplementedCard {
  constructor (game) {
    super(game, "Near-Death Experience", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NearDeathExperience;
