"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralhelmGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Coralhelm Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CoralhelmGuide;
