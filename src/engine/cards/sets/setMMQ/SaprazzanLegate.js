"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaprazzanLegate extends UnimplementedCard {
  constructor (game) {
    super(game, "Saprazzan Legate", "Mercadian Masques", "MMQ");
  }
}

module.exports = SaprazzanLegate;
