"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenWarhawk extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Warhawk", "Legions", "LGN");
  }
}

module.exports = AvenWarhawk;
