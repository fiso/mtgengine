"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrudgeReavers extends UnimplementedCard {
  constructor (game) {
    super(game, "Drudge Reavers", "Time Spiral", "TSP");
  }
}

module.exports = DrudgeReavers;
