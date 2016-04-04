"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrisonBarricade extends Card {
  constructor(game) {
    super(game, "Prison Barricade", "Invasion", "INV");
  }
}

module.exports = PrisonBarricade;
