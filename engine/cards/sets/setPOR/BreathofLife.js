"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreathofLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Breath of Life", "Portal", "POR");
  }
}

module.exports = BreathofLife;
