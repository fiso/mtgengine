"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorlandHaunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Moorland Haunt", "Innistrad", "ISD");
  }
}

module.exports = MoorlandHaunt;
