"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepwoodLegate extends UnimplementedCard {
  constructor(game) {
    super(game, "Deepwood Legate", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodLegate;
