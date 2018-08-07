"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Sliver", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = EssenceSliver;
