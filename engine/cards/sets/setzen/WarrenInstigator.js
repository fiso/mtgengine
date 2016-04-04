"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarrenInstigator extends UnimplementedCard {
  constructor(game) {
    super(game, "Warren Instigator", "Zendikar", "ZEN");
  }
}

module.exports = WarrenInstigator;
