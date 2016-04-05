"use strict";
const Constants = require ("../../../Constants");
const UnstableMutationBase = require("../setARN/UnstableMutation");

class UnstableMutation extends UnstableMutationBase {
  constructor(game) {
    super(game, "Unstable Mutation", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = UnstableMutation;
