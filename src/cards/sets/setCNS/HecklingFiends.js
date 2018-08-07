"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HecklingFiends extends UnimplementedCard {
  constructor (game) {
    super(game, "Heckling Fiends", "Conspiracy", "CNS");
  }
}

module.exports = HecklingFiends;
