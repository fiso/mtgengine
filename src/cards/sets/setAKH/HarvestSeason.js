"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestSeason extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvest Season", "Amonkhet", "AKH");
  }
}

module.exports = HarvestSeason;
