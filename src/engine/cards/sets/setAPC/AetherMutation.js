"use strict";
const Constants = require ("../../../Constants");
const AetherMutationBase = require("../setVMA/AetherMutation");

class AetherMutation extends AetherMutationBase {
  constructor (game) {
    super(game, "Aether Mutation", "Apocalypse", "APC");
  }
}

module.exports = AetherMutation;
