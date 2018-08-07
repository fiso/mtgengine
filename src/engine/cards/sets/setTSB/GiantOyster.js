"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantOyster extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Oyster", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = GiantOyster;
