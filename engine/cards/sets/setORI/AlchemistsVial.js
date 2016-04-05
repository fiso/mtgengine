"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlchemistsVial extends UnimplementedCard {
  constructor(game) {
    super(game, "Alchemist's Vial", "Magic Origins", "ORI");
  }
}

module.exports = AlchemistsVial;
