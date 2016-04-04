"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathMutation extends Card {
  constructor(game) {
    super(game, "Death Mutation", "Apocalypse", "APC");
  }
}

module.exports = DeathMutation;
