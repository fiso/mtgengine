"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianAltar extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Altar", "Invasion", "INV");
  }
}

module.exports = PhyrexianAltar;
