"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JalumTome extends UnimplementedCard {
  constructor(game) {
    super(game, "Jalum Tome", "Anthologies", "ATH");
  }
}

module.exports = JalumTome;
