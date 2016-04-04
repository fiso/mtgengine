"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherMutationBase = require("../setAPC/ÆtherMutation.js");

class ÆtherMutation extends ÆtherMutationBase {
  constructor(game) {
    super(game, "Æther Mutation", "Vintage Masters", "VMA");
  }
}

module.exports = ÆtherMutation;
