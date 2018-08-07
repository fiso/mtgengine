"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pox extends UnimplementedCard {
  constructor (game) {
    super(game, "Pox", "Masters Edition", "MED");
  }
}

module.exports = Pox;
