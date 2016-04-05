"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EiganjoCastle extends UnimplementedCard {
  constructor(game) {
    super(game, "Eiganjo Castle", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EiganjoCastle;
