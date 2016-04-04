"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatapultSquad extends UnimplementedCard {
  constructor(game) {
    super(game, "Catapult Squad", "Onslaught", "ONS");
  }
}

module.exports = CatapultSquad;
