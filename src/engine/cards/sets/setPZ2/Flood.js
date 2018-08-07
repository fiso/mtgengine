"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flood extends UnimplementedCard {
  constructor (game) {
    super(game, "Flood", "You Make the Cube", "PZ2");
  }
}

module.exports = Flood;
