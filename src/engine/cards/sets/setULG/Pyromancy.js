"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyromancy extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyromancy", "Urza's Legacy", "ULG");
  }
}

module.exports = Pyromancy;
