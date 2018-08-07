"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderSpawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder Spawn", "Legends", "LEG");
  }
}

module.exports = ElderSpawn;
