"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurasaRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Murasa Ranger", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MurasaRanger;
