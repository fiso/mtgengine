"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unmask extends UnimplementedCard {
  constructor(game) {
    super(game, "Unmask", "Mercadian Masques", "MMQ");
  }
}

module.exports = Unmask;
