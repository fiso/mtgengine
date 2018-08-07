"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlipperyKarst extends UnimplementedCard {
  constructor (game) {
    super(game, "Slippery Karst", "Commander Anthology", "CMA");
  }
}

module.exports = SlipperyKarst;
