"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticStudy extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhystic Study", "Legendary Cube", "PZ1");
  }
}

module.exports = RhysticStudy;
