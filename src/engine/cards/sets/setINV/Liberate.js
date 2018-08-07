"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Liberate extends UnimplementedCard {
  constructor (game) {
    super(game, "Liberate", "Invasion", "INV");
  }
}

module.exports = Liberate;
