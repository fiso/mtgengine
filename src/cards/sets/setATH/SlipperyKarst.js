"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlipperyKarst extends UnimplementedCard {
  constructor(game) {
    super(game, "Slippery Karst", "Anthologies", "ATH");
  }
}

module.exports = SlipperyKarst;
