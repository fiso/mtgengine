"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatDefender extends UnimplementedCard {
  constructor(game) {
    super(game, "Great Defender", "Legends", "LEG");
  }
}

module.exports = GreatDefender;
