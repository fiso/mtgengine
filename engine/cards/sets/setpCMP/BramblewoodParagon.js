"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BramblewoodParagon extends UnimplementedCard {
  constructor(game) {
    super(game, "Bramblewood Paragon", "Champs and States", "pCMP");
  }
}

module.exports = BramblewoodParagon;
