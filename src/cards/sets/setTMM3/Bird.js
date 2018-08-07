"use strict";
const Constants = require ("../../../Constants");
const BirdBase = require("../setTCM2/Bird");

class Bird extends BirdBase {
  constructor (game) {
    super(game, "Bird", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Bird;
