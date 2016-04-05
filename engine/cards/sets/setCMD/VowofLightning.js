"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VowofLightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Vow of Lightning", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofLightning;
