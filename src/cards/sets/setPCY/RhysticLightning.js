"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticLightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Lightning", "Prophecy", "PCY");
  }
}

module.exports = RhysticLightning;
