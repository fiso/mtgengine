"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhimsoftheFates extends Card {
  constructor(game) {
    super(game, "Whims of the Fates", "Born of the Gods", "BNG");
  }
}

module.exports = WhimsoftheFates;
