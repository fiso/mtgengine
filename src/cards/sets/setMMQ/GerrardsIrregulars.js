"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardsIrregulars extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard's Irregulars", "Mercadian Masques", "MMQ");
  }
}

module.exports = GerrardsIrregulars;
