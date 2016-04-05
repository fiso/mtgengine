"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushwoodLegate extends UnimplementedCard {
  constructor(game) {
    super(game, "Rushwood Legate", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodLegate;
