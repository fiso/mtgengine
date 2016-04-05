"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blisterpod extends UnimplementedCard {
  constructor(game) {
    super(game, "Blisterpod", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Blisterpod;
