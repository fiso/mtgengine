"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrassHerald extends UnimplementedCard {
  constructor(game) {
    super(game, "Brass Herald", "Apocalypse", "APC");
  }
}

module.exports = BrassHerald;
