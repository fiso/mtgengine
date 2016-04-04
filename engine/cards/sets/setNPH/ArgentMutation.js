"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgentMutation extends Card {
  constructor(game) {
    super(game, "Argent Mutation", "New Phyrexia", "NPH");
  }
}

module.exports = ArgentMutation;
