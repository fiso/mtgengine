"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntheTables extends UnimplementedCard {
  constructor(game) {
    super(game, "Turn the Tables", "Darksteel", "DST");
  }
}

module.exports = TurntheTables;
