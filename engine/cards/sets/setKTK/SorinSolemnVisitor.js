"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorinSolemnVisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Sorin, Solemn Visitor", "Khans of Tarkir", "KTK");
  }
}

module.exports = SorinSolemnVisitor;
