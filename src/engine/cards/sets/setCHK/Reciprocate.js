"use strict";
const Constants = require ("../../../Constants");
const ReciprocateBase = require("../setDDG/Reciprocate");

class Reciprocate extends ReciprocateBase {
  constructor (game) {
    super(game, "Reciprocate", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Reciprocate;
