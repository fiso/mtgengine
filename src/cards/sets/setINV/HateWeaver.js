"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HateWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Hate Weaver", "Invasion", "INV");
  }
}

module.exports = HateWeaver;
