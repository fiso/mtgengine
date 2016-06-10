"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dispel extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Dispel;
