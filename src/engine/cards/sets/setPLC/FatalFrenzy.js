"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalFrenzy extends UnimplementedCard {
  constructor (game) {
    super(game, "Fatal Frenzy", "Planar Chaos", "PLC");
  }
}

module.exports = FatalFrenzy;
