"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BramblewoodParagon extends Card {
  constructor(game) {
    super(game, "Bramblewood Paragon", "Champs and States", "pCMP");
  }
}

module.exports = BramblewoodParagon;
