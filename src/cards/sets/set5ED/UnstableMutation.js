"use strict";
const Constants = require ("../../../Constants");
const UnstableMutationBase = require("../setARN/UnstableMutation");

class UnstableMutation extends UnstableMutationBase {
  constructor (game) {
    super(game, "Unstable Mutation", "Fifth Edition", "5ED");
  }
}

module.exports = UnstableMutation;
