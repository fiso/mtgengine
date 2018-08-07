"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireandBrimstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire and Brimstone", "The Dark", "DRK");
  }
}

module.exports = FireandBrimstone;
