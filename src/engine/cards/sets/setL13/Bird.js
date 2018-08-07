"use strict";
const Constants = require ("../../../Constants");
const BirdBase = require("../setTCM2/Bird");

class Bird extends BirdBase {
  constructor (game) {
    super(game, "Bird", "League Tokens 2013", "L13");
  }
}

module.exports = Bird;
