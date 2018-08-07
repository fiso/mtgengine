"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderlandRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Borderland Ranger", "Explorers of Ixalan", "E02");
  }
}

module.exports = BorderlandRanger;
