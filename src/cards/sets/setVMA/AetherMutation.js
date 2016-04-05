"use strict";
const Constants = require ("../../../Constants");
const AetherMutationBase = require("../setAPC/AetherMutation");

class AetherMutation extends AetherMutationBase {
  constructor(game) {
    super(game, "Æther Mutation", "Vintage Masters", "VMA");
  }
}

module.exports = AetherMutation;
