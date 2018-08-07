"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepSpawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep Spawn", "Masters Edition II", "ME2");
  }
}

module.exports = DeepSpawn;
