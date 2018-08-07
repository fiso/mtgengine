"use strict";
const Constants = require ("../../../Constants");
const ElephantBase = require("../setTCMA/Elephant");

class Elephant extends ElephantBase {
  constructor (game) {
    super(game, "Elephant", "Magic Player Rewards 2001", "MPR");
  }
}

module.exports = Elephant;
