"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrageTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrage Tyrant", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BarrageTyrant;
