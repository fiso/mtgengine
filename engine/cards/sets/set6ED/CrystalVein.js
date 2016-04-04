"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrystalVein extends Card {
  constructor(game) {
    super(game, "Crystal Vein", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CrystalVein;
