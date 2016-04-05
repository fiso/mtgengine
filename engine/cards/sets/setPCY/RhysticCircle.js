"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticCircle extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Circle", "Prophecy", "PCY");
  }
}

module.exports = RhysticCircle;
