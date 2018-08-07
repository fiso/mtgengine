"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Polyraptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Polyraptor", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = Polyraptor;
