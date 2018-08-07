"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutlandBoar extends UnimplementedCard {
  constructor (game) {
    super(game, "Outland Boar", "Aether Revolt", "AER");
  }
}

module.exports = OutlandBoar;
