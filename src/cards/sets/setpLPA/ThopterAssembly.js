"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterAssembly extends UnimplementedCard {
  constructor(game) {
    super(game, "Thopter Assembly", "Launch Parties", "pLPA");
  }
}

module.exports = ThopterAssembly;
