"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dredge extends UnimplementedCard {
  constructor (game) {
    super(game, "Dredge", "Invasion", "INV");
  }
}

module.exports = Dredge;
