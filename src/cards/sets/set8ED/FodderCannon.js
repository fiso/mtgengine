"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FodderCannon extends UnimplementedCard {
  constructor(game) {
    super(game, "Fodder Cannon", "Eighth Edition", "8ED");
  }
}

module.exports = FodderCannon;
