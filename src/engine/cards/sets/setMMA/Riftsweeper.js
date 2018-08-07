"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riftsweeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Riftsweeper", "Modern Masters", "MMA");
  }
}

module.exports = Riftsweeper;
