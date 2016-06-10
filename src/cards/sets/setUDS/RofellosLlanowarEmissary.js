"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RofellosLlanowarEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Rofellos, Llanowar Emissary", "Urza's Destiny", "UDS");
  }
}

module.exports = RofellosLlanowarEmissary;
