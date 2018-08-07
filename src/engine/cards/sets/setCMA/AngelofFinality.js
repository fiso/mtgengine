"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofFinality extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Finality", "Commander Anthology", "CMA");
  }
}

module.exports = AngelofFinality;
