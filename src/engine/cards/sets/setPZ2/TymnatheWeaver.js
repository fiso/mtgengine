"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TymnatheWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Tymna the Weaver", "You Make the Cube", "PZ2");
  }
}

module.exports = TymnatheWeaver;
