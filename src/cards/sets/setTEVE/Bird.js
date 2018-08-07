"use strict";
const Constants = require ("../../../Constants");
const BirdBase = require("../setTCM2/Bird");

class Bird extends BirdBase {
  constructor (game) {
    super(game, "Bird", "Eventide Tokens", "TEVE");
  }
}

module.exports = Bird;
