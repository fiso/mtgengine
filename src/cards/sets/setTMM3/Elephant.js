"use strict";
const Constants = require ("../../../Constants");
const ElephantBase = require("../setTCMA/Elephant");

class Elephant extends ElephantBase {
  constructor (game) {
    super(game, "Elephant", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Elephant;
