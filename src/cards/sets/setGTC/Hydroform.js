"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hydroform extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydroform", "Gatecrash", "GTC");
  }
}

module.exports = Hydroform;
