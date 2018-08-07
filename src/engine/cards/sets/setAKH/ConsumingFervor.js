"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingFervor extends UnimplementedCard {
  constructor (game) {
    super(game, "Consuming Fervor", "Amonkhet", "AKH");
  }
}

module.exports = ConsumingFervor;
