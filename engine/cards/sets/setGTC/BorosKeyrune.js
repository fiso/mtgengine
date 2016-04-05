"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosKeyrune extends UnimplementedCard {
  constructor(game) {
    super(game, "Boros Keyrune", "Gatecrash", "GTC");
  }
}

module.exports = BorosKeyrune;
