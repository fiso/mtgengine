"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overrun extends UnimplementedCard {
  constructor (game) {
    super(game, "Overrun", "Commander Anthology", "CMA");
  }
}

module.exports = Overrun;
