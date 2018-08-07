"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AltarofMogis extends UnimplementedCard {
  constructor (game) {
    super(game, "Altar of Mogis", "Battle the Horde", "TBTH");
  }
}

module.exports = AltarofMogis;
