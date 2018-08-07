"use strict";
const Constants = require ("../../../Constants");
const BirdBase = require("../setTCM2/Bird");

class Bird extends BirdBase {
  constructor (game) {
    super(game, "Bird", "Magic 2011 Tokens", "TM11");
  }
}

module.exports = Bird;
