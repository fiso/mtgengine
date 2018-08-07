"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KumenasAwakening extends UnimplementedCard {
  constructor (game) {
    super(game, "Kumena's Awakening", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = KumenasAwakening;
