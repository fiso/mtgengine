"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disrupt extends UnimplementedCard {
  constructor(game) {
    super(game, "Disrupt", "Invasion", "INV");
  }
}

module.exports = Disrupt;
