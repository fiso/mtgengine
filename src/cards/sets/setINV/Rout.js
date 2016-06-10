"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rout extends UnimplementedCard {
  constructor (game) {
    super(game, "Rout", "Invasion", "INV");
  }
}

module.exports = Rout;
