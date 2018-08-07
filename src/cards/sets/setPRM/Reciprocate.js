"use strict";
const Constants = require ("../../../Constants");
const ReciprocateBase = require("../setDDG/Reciprocate");

class Reciprocate extends ReciprocateBase {
  constructor (game) {
    super(game, "Reciprocate", "Magic Online Promos", "PRM");
  }
}

module.exports = Reciprocate;
