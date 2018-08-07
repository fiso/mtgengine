"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorinSolemnVisitorEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorin, Solemn Visitor Emblem", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = SorinSolemnVisitorEmblem;
