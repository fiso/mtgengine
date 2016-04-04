"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeneralsRegalia extends UnimplementedCard {
  constructor(game) {
    super(game, "General's Regalia", "Mercadian Masques", "MMQ");
  }
}

module.exports = GeneralsRegalia;
