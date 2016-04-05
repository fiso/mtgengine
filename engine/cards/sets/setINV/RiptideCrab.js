"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiptideCrab extends UnimplementedCard {
  constructor(game) {
    super(game, "Riptide Crab", "Invasion", "INV");
  }
}

module.exports = RiptideCrab;
