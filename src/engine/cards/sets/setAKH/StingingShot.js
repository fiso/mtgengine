"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StingingShot extends UnimplementedCard {
  constructor (game) {
    super(game, "Stinging Shot", "Amonkhet", "AKH");
  }
}

module.exports = StingingShot;
