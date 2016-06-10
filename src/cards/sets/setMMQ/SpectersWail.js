"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectersWail extends UnimplementedCard {
  constructor (game) {
    super(game, "Specter's Wail", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpectersWail;
