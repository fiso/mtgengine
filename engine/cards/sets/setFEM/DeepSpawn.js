"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepSpawn extends Card {
  constructor(game) {
    super(game, "Deep Spawn", "Fallen Empires", "FEM");
  }
}

module.exports = DeepSpawn;
