"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PirateShip extends UnimplementedCard {
  constructor(game) {
    super(game, "Pirate Ship", "Collector's Edition", "CED");
  }
}

module.exports = PirateShip;
