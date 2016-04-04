"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathMutationBase = require("../setAPC/DeathMutation.js");

class DeathMutation extends DeathMutationBase {
  constructor(game) {
    super(game, "Death Mutation", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DeathMutation;
