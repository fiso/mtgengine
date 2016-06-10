"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulManipulation extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Manipulation", "Alara Reborn", "ARB");
  }
}

module.exports = SoulManipulation;
