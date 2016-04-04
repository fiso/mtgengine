"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientHydra extends Card {
  constructor(game) {
    super(game, "Ancient Hydra", "Nemesis", "NMS");
  }
}

module.exports = AncientHydra;
