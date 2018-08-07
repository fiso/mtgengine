"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingButcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Butcher", "Eventide", "EVE");
  }
}

module.exports = SmolderingButcher;
