"use strict";
const Constants = require ("../../../Constants");
const DeathbyDragonsBase = require("../setCMA/DeathbyDragons");

class DeathbyDragons extends DeathbyDragonsBase {
  constructor (game) {
    super(game, "Death by Dragons", "Commander 2011", "CMD");
  }
}

module.exports = DeathbyDragons;
