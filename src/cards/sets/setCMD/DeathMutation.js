"use strict";
const Constants = require ("../../../Constants");
const DeathMutationBase = require("../setAPC/DeathMutation");

class DeathMutation extends DeathMutationBase {
  constructor(game) {
    super(game, "Death Mutation", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DeathMutation;
