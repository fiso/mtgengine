"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wallop extends UnimplementedCard {
  constructor(game) {
    super(game, "Wallop", "Invasion", "INV");
  }
}

module.exports = Wallop;
