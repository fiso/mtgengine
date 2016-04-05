"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeechingBite extends UnimplementedCard {
  constructor(game) {
    super(game, "Leeching Bite", "New Phyrexia", "NPH");
  }
}

module.exports = LeechingBite;
