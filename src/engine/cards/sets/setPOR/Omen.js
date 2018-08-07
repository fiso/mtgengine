"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Omen extends UnimplementedCard {
  constructor (game) {
    super(game, "Omen", "Portal", "POR");
  }
}

module.exports = Omen;
