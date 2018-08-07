"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cathodion extends UnimplementedCard {
  constructor (game) {
    super(game, "Cathodion", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Cathodion;
