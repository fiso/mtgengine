"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fling extends UnimplementedCard {
  constructor (game) {
    super(game, "Fling", "Amonkhet", "AKH");
  }
}

module.exports = Fling;
