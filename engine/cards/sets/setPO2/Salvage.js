"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Salvage extends UnimplementedCard {
  constructor(game) {
    super(game, "Salvage", "Portal Second Age", "PO2");
  }
}

module.exports = Salvage;
