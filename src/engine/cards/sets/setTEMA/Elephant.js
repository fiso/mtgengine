"use strict";
const Constants = require ("../../../Constants");
const ElephantBase = require("../setTCMA/Elephant");

class Elephant extends ElephantBase {
  constructor (game) {
    super(game, "Elephant", "Eternal Masters Tokens", "TEMA");
  }
}

module.exports = Elephant;
