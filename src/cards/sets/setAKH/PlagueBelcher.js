"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueBelcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Belcher", "Amonkhet", "AKH");
  }
}

module.exports = PlagueBelcher;
