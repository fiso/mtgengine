"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovKeyrune extends UnimplementedCard {
  constructor (game) {
    super(game, "Orzhov Keyrune", "Gatecrash", "GTC");
  }
}

module.exports = OrzhovKeyrune;
