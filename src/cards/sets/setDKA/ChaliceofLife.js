"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaliceofLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Chalice of Life", "Dark Ascension", "DKA");
  }
}

module.exports = ChaliceofLife;
