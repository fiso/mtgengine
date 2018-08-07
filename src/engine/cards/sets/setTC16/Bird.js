"use strict";
const Constants = require ("../../../Constants");
const BirdBase = require("../setTCM2/Bird");

class Bird extends BirdBase {
  constructor (game) {
    super(game, "Bird", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Bird;
