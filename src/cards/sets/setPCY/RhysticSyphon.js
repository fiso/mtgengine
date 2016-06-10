"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticSyphon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhystic Syphon", "Prophecy", "PCY");
  }
}

module.exports = RhysticSyphon;
