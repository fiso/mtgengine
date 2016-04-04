"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolemFoundry extends Card {
  constructor(game) {
    super(game, "Golem Foundry", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GolemFoundry;
