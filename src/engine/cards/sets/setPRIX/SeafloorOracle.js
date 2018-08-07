"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeafloorOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Seafloor Oracle", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = SeafloorOracle;
