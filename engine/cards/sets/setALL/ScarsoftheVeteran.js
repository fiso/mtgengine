"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScarsoftheVeteran extends UnimplementedCard {
  constructor(game) {
    super(game, "Scars of the Veteran", "Alliances", "ALL");
  }
}

module.exports = ScarsoftheVeteran;
