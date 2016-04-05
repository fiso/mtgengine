"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterMorphling extends UnimplementedCard {
  constructor(game) {
    super(game, "Greater Morphling", "Unhinged", "UNH");
  }
}

module.exports = GreaterMorphling;
