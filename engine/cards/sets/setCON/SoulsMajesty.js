"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulsMajesty extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul's Majesty", "Conflux", "CON");
  }
}

module.exports = SoulsMajesty;
