"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KissofDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiss of Death", "Portal Second Age", "PO2");
  }
}

module.exports = KissofDeath;
