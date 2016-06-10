"use strict";
const Constants = require ("../../../Constants");
const GoblinChariotBase = require("../set8ED/GoblinChariot");

class GoblinChariot extends GoblinChariotBase {
  constructor (game) {
    super(game, "Goblin Chariot", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinChariot;
