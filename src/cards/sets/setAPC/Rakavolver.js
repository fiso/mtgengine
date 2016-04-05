"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rakavolver extends UnimplementedCard {
  constructor(game) {
    super(game, "Rakavolver", "Apocalypse", "APC");
  }
}

module.exports = Rakavolver;
