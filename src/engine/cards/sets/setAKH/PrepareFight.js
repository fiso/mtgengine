"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrepareFight extends UnimplementedCard {
  constructor (game) {
    super(game, "Prepare // Fight", "Amonkhet", "AKH");
  }
}

module.exports = PrepareFight;
