"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riddlekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Riddlekeeper", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Riddlekeeper;
