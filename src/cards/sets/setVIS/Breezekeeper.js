"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Breezekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Breezekeeper", "Visions", "VIS");
  }
}

module.exports = Breezekeeper;
