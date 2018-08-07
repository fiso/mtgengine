"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieAerie extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Aerie", "Unstable", "UST");
  }
}

module.exports = FaerieAerie;
