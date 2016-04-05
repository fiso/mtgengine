"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarrowChomper extends UnimplementedCard {
  constructor(game) {
    super(game, "Marrow Chomper", "Alara Reborn", "ARB");
  }
}

module.exports = MarrowChomper;
