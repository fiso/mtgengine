"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mugging extends UnimplementedCard {
  constructor(game) {
    super(game, "Mugging", "Gatecrash", "GTC");
  }
}

module.exports = Mugging;
