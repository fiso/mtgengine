"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Storm", "Born of the Gods", "BNG");
  }
}

module.exports = SuddenStorm;
