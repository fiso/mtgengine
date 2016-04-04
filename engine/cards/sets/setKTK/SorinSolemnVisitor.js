"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SorinSolemnVisitor extends Card {
  constructor(game) {
    super(game, "Sorin, Solemn Visitor", "Khans of Tarkir", "KTK");
  }
}

module.exports = SorinSolemnVisitor;
