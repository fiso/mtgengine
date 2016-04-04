"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GerrardsIrregulars extends Card {
  constructor(game) {
    super(game, "Gerrard's Irregulars", "Mercadian Masques", "MMQ");
  }
}

module.exports = GerrardsIrregulars;
