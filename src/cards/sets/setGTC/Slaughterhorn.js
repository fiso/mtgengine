"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Slaughterhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaughterhorn", "Gatecrash", "GTC");
  }
}

module.exports = Slaughterhorn;
