"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatwingBrume extends UnimplementedCard {
  constructor (game) {
    super(game, "Batwing Brume", "Archenemy", "ARC");
  }
}

module.exports = BatwingBrume;
