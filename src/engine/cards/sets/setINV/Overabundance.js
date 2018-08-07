"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overabundance extends UnimplementedCard {
  constructor (game) {
    super(game, "Overabundance", "Invasion", "INV");
  }
}

module.exports = Overabundance;
