"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anavolver extends UnimplementedCard {
  constructor(game) {
    super(game, "Anavolver", "Apocalypse", "APC");
  }
}

module.exports = Anavolver;
