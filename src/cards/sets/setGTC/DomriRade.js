"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DomriRade extends UnimplementedCard {
  constructor (game) {
    super(game, "Domri Rade", "Gatecrash", "GTC");
  }
}

module.exports = DomriRade;
