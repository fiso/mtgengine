"use strict";
const Constants = require ("../../../Constants");
const DeathMutationBase = require("../setCMD/DeathMutation");

class DeathMutation extends DeathMutationBase {
  constructor (game) {
    super(game, "Death Mutation", "Apocalypse", "APC");
  }
}

module.exports = DeathMutation;
