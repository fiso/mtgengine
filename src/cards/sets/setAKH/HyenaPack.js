"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HyenaPack extends UnimplementedCard {
  constructor (game) {
    super(game, "Hyena Pack", "Amonkhet", "AKH");
  }
}

module.exports = HyenaPack;
