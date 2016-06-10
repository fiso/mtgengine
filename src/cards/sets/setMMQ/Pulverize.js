"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pulverize extends UnimplementedCard {
  constructor (game) {
    super(game, "Pulverize", "Mercadian Masques", "MMQ");
  }
}

module.exports = Pulverize;
