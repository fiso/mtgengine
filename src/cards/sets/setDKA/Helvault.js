"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Helvault extends UnimplementedCard {
  constructor (game) {
    super(game, "Helvault", "Dark Ascension", "DKA");
  }
}

module.exports = Helvault;
