"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhimsoftheFates extends UnimplementedCard {
  constructor(game) {
    super(game, "Whims of the Fates", "Born of the Gods", "BNG");
  }
}

module.exports = WhimsoftheFates;
