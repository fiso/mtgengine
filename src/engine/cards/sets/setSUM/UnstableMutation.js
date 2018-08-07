"use strict";
const Constants = require ("../../../Constants");
const UnstableMutationBase = require("../setTSB/UnstableMutation");

class UnstableMutation extends UnstableMutationBase {
  constructor (game) {
    super(game, "Unstable Mutation", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = UnstableMutation;
