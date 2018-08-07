"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFarseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Farseer", "Scourge", "SCG");
  }
}

module.exports = AvenFarseer;
