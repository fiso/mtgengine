"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FadefromMemory extends UnimplementedCard {
  constructor (game) {
    super(game, "Fade from Memory", "Onslaught", "ONS");
  }
}

module.exports = FadefromMemory;
