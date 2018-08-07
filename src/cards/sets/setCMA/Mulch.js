"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mulch extends UnimplementedCard {
  constructor (game) {
    super(game, "Mulch", "Commander Anthology", "CMA");
  }
}

module.exports = Mulch;
