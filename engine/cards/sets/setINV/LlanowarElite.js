"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LlanowarElite extends Card {
  constructor(game) {
    super(game, "Llanowar Elite", "Invasion", "INV");
  }
}

module.exports = LlanowarElite;
