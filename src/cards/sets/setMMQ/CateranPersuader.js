"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CateranPersuader extends UnimplementedCard {
  constructor(game) {
    super(game, "Cateran Persuader", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranPersuader;
