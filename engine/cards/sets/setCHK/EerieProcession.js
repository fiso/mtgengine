"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EerieProcession extends UnimplementedCard {
  constructor(game) {
    super(game, "Eerie Procession", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EerieProcession;
