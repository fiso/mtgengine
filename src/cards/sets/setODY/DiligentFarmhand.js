"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiligentFarmhand extends UnimplementedCard {
  constructor(game) {
    super(game, "Diligent Farmhand", "Odyssey", "ODY");
  }
}

module.exports = DiligentFarmhand;
