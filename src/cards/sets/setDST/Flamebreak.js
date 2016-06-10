"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flamebreak extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamebreak", "Darksteel", "DST");
  }
}

module.exports = Flamebreak;
