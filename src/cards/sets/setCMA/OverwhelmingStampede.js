"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverwhelmingStampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Overwhelming Stampede", "Commander Anthology", "CMA");
  }
}

module.exports = OverwhelmingStampede;
