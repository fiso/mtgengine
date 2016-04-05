"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandTogether extends UnimplementedCard {
  constructor(game) {
    super(game, "Stand Together", "Darksteel", "DST");
  }
}

module.exports = StandTogether;
