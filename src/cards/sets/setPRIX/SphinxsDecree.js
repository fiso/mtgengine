"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxsDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx's Decree", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = SphinxsDecree;
