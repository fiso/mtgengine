"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazoretsFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Hazoret's Favor", "Amonkhet", "AKH");
  }
}

module.exports = HazoretsFavor;
