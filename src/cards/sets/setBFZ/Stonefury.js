"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stonefury extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonefury", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Stonefury;
