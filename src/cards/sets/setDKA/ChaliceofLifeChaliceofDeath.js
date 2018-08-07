"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaliceofLifeChaliceofDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Chalice of Life // Chalice of Death", "Dark Ascension", "DKA");
  }
}

module.exports = ChaliceofLifeChaliceofDeath;
