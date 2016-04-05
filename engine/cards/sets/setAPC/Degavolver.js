"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Degavolver extends UnimplementedCard {
  constructor(game) {
    super(game, "Degavolver", "Apocalypse", "APC");
  }
}

module.exports = Degavolver;
