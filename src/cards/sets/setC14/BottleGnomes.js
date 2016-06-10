"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BottleGnomes extends UnimplementedCard {
  constructor (game) {
    super(game, "Bottle Gnomes", "Commander 2014", "C14");
  }
}

module.exports = BottleGnomes;
