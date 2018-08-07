"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BottleGnomes extends UnimplementedCard {
  constructor (game) {
    super(game, "Bottle Gnomes", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BottleGnomes;
