"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anticipate extends UnimplementedCard {
  constructor (game) {
    super(game, "Anticipate", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Anticipate;
