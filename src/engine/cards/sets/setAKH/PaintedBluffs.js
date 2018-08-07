"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaintedBluffs extends UnimplementedCard {
  constructor (game) {
    super(game, "Painted Bluffs", "Amonkhet", "AKH");
  }
}

module.exports = PaintedBluffs;
