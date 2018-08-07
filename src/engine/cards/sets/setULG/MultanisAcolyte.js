"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MultanisAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Multani's Acolyte", "Urza's Legacy", "ULG");
  }
}

module.exports = MultanisAcolyte;
