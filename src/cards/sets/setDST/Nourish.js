"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nourish extends UnimplementedCard {
  constructor (game) {
    super(game, "Nourish", "Darksteel", "DST");
  }
}

module.exports = Nourish;
