"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleekSchooner extends UnimplementedCard {
  constructor (game) {
    super(game, "Sleek Schooner", "Ixalan", "XLN");
  }
}

module.exports = SleekSchooner;
