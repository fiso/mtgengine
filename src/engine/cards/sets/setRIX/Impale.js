"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Impale extends UnimplementedCard {
  constructor (game) {
    super(game, "Impale", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Impale;
