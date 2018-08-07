"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefectiveDetective extends UnimplementedCard {
  constructor (game) {
    super(game, "Defective Detective", "Unstable", "UST");
  }
}

module.exports = DefectiveDetective;
