"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon's Grasp", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DemonsGrasp;
