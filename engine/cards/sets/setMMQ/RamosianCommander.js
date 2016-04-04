"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamosianCommander extends UnimplementedCard {
  constructor(game) {
    super(game, "Ramosian Commander", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianCommander;
