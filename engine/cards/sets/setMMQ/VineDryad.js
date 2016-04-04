"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VineDryad extends Card {
  constructor(game) {
    super(game, "Vine Dryad", "Mercadian Masques", "MMQ");
  }
}

module.exports = VineDryad;
