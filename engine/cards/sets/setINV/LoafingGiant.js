"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoafingGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Loafing Giant", "Invasion", "INV");
  }
}

module.exports = LoafingGiant;
