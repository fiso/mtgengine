"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntheTide extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn the Tide", "Conspiracy", "CNS");
  }
}

module.exports = TurntheTide;
