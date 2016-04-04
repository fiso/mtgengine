"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inviolability extends UnimplementedCard {
  constructor(game) {
    super(game, "Inviolability", "Mercadian Masques", "MMQ");
  }
}

module.exports = Inviolability;
