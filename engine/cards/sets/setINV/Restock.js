"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Restock extends UnimplementedCard {
  constructor(game) {
    super(game, "Restock", "Invasion", "INV");
  }
}

module.exports = Restock;
