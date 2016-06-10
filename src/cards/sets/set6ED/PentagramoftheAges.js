"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PentagramoftheAges extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentagram of the Ages", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PentagramoftheAges;
