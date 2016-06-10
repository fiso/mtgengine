"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenLiberator extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Liberator", "Scourge", "SCG");
  }
}

module.exports = AvenLiberator;
