"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingSlug extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Slug", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = SpittingSlug;
