"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Restrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Restrain", "Invasion", "INV");
  }
}

module.exports = Restrain;
