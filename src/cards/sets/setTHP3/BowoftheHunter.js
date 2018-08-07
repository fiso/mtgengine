"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BowoftheHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Bow of the Hunter", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = BowoftheHunter;
