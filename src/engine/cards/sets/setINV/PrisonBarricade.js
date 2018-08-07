"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrisonBarricade extends UnimplementedCard {
  constructor (game) {
    super(game, "Prison Barricade", "Invasion", "INV");
  }
}

module.exports = PrisonBarricade;
