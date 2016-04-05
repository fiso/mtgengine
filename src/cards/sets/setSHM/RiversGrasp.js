"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiversGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "River's Grasp", "Shadowmoor", "SHM");
  }
}

module.exports = RiversGrasp;
