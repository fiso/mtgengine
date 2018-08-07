"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VertigoSpawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Vertigo Spawn", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = VertigoSpawn;
