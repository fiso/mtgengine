"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparringGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparring Golem", "Invasion", "INV");
  }
}

module.exports = SparringGolem;
