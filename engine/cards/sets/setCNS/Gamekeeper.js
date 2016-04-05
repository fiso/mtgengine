"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gamekeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Gamekeeper", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Gamekeeper;
