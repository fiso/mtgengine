"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindingConstrictor extends UnimplementedCard {
  constructor (game) {
    super(game, "Winding Constrictor", "Aether Revolt", "AER");
  }
}

module.exports = WindingConstrictor;
