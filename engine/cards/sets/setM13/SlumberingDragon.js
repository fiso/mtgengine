"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlumberingDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Slumbering Dragon", "Magic 2013", "M13");
  }
}

module.exports = SlumberingDragon;
