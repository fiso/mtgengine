"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodofCockroaches extends UnimplementedCard {
  constructor (game) {
    super(game, "Brood of Cockroaches", "Visions", "VIS");
  }
}

module.exports = BroodofCockroaches;
