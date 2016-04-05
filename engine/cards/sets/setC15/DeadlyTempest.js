"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyTempest extends UnimplementedCard {
  constructor(game) {
    super(game, "Deadly Tempest", "Commander 2015", "C15");
  }
}

module.exports = DeadlyTempest;
