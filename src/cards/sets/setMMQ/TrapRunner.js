"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrapRunner extends UnimplementedCard {
  constructor(game) {
    super(game, "Trap Runner", "Mercadian Masques", "MMQ");
  }
}

module.exports = TrapRunner;
