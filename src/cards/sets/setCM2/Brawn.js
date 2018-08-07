"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Brawn", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Brawn;
