"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CobraTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Cobra Trap", "Commander 2015", "C15");
  }
}

module.exports = CobraTrap;
