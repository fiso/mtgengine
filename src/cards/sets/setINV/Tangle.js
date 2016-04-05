"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tangle extends UnimplementedCard {
  constructor(game) {
    super(game, "Tangle", "Invasion", "INV");
  }
}

module.exports = Tangle;
