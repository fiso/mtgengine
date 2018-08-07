"use strict";
const Constants = require ("../../../Constants");
const GoblinChariotBase = require("../set9ED/GoblinChariot");

class GoblinChariot extends GoblinChariotBase {
  constructor (game) {
    super(game, "Goblin Chariot", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinChariot;
