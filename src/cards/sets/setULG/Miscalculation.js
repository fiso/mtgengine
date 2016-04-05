"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Miscalculation extends UnimplementedCard {
  constructor(game) {
    super(game, "Miscalculation", "Urza's Legacy", "ULG");
  }
}

module.exports = Miscalculation;
