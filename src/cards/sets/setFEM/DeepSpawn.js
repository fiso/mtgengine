"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepSpawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep Spawn", "Fallen Empires", "FEM");
  }
}

module.exports = DeepSpawn;
