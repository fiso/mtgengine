"use strict";
const Constants = require ("../../../Constants");
const ServoBase = require("../setTC18/Servo");

class Servo extends ServoBase {
  constructor (game) {
    super(game, "Servo", "Kaladesh Tokens", "TKLD");
  }
}

module.exports = Servo;
