"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riddlekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Riddlekeeper", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Riddlekeeper;
