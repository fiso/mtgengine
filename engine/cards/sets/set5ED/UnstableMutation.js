"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnstableMutationBase = require("../setARN/UnstableMutation.js");

class UnstableMutation extends UnstableMutationBase {
  constructor(game) {
    super(game, "Unstable Mutation", "Fifth Edition", "5ED");
  }
}

module.exports = UnstableMutation;
