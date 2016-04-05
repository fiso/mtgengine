"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolemFoundry extends UnimplementedCard {
  constructor(game) {
    super(game, "Golem Foundry", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GolemFoundry;
