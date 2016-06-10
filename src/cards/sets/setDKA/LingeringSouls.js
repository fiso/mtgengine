"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LingeringSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Lingering Souls", "Dark Ascension", "DKA");
  }
}

module.exports = LingeringSouls;
