"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BramblewoodParagon extends UnimplementedCard {
  constructor (game) {
    super(game, "Bramblewood Paragon", "Morningtide", "MOR");
  }
}

module.exports = BramblewoodParagon;
