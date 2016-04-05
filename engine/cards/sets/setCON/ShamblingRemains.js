"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingRemains extends UnimplementedCard {
  constructor(game) {
    super(game, "Shambling Remains", "Conflux", "CON");
  }
}

module.exports = ShamblingRemains;
