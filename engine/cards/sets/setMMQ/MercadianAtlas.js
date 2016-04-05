"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercadianAtlas extends UnimplementedCard {
  constructor(game) {
    super(game, "Mercadian Atlas", "Mercadian Masques", "MMQ");
  }
}

module.exports = MercadianAtlas;
