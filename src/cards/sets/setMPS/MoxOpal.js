"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxOpal extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Opal", "Kaladesh Inventions", "MPS");
  }
}

module.exports = MoxOpal;
