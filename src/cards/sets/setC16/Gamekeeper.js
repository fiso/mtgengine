"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gamekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Gamekeeper", "Commander 2016", "C16");
  }
}

module.exports = Gamekeeper;
