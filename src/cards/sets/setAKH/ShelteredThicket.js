"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteredThicket extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheltered Thicket", "Amonkhet", "AKH");
  }
}

module.exports = ShelteredThicket;
