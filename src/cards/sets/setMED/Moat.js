"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moat extends UnimplementedCard {
  constructor (game) {
    super(game, "Moat", "Masters Edition", "MED");
  }
}

module.exports = Moat;
