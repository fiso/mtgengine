"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherTide extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Tide", "Exodus", "EXO");
  }
}

module.exports = AetherTide;
