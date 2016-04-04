"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalConnection extends UnimplementedCard {
  constructor(game) {
    super(game, "Natural Connection", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NaturalConnection;
