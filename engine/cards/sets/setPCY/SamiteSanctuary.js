"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Samite Sanctuary", "Prophecy", "PCY");
  }
}

module.exports = SamiteSanctuary;
