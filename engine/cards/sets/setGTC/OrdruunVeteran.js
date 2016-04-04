"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrdruunVeteran extends UnimplementedCard {
  constructor(game) {
    super(game, "Ordruun Veteran", "Gatecrash", "GTC");
  }
}

module.exports = OrdruunVeteran;
