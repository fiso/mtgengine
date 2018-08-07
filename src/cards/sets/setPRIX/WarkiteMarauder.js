"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarkiteMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Warkite Marauder", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = WarkiteMarauder;
