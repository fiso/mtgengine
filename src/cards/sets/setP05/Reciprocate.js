"use strict";
const Constants = require ("../../../Constants");
const ReciprocateBase = require("../setDDG/Reciprocate");

class Reciprocate extends ReciprocateBase {
  constructor (game) {
    super(game, "Reciprocate", "Magic Player Rewards 2005", "P05");
  }
}

module.exports = Reciprocate;
