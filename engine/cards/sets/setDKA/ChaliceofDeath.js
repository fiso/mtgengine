"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaliceofDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Chalice of Death", "Dark Ascension", "DKA");
  }
}

module.exports = ChaliceofDeath;
