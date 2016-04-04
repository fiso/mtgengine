"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrenellatedWall extends Card {
  constructor(game) {
    super(game, "Crenellated Wall", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrenellatedWall;
