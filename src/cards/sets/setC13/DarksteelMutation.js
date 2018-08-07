"use strict";
const Constants = require ("../../../Constants");
const DarksteelMutationBase = require("../setCMA/DarksteelMutation");

class DarksteelMutation extends DarksteelMutationBase {
  constructor (game) {
    super(game, "Darksteel Mutation", "Commander 2013", "C13");
  }
}

module.exports = DarksteelMutation;
