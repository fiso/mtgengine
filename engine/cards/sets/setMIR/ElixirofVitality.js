"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElixirofVitality extends UnimplementedCard {
  constructor(game) {
    super(game, "Elixir of Vitality", "Mirage", "MIR");
  }
}

module.exports = ElixirofVitality;
