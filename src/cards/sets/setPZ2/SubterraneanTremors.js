"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubterraneanTremors extends UnimplementedCard {
  constructor (game) {
    super(game, "Subterranean Tremors", "You Make the Cube", "PZ2");
  }
}

module.exports = SubterraneanTremors;
