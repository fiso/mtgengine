"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EiganjoCastle extends Card {
  constructor(game) {
    super(game, "Eiganjo Castle", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EiganjoCastle;
