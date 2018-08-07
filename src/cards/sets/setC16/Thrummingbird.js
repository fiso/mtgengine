"use strict";
const Constants = require ("../../../Constants");
const ThrummingbirdBase = require("../setCM2/Thrummingbird");

class Thrummingbird extends ThrummingbirdBase {
  constructor (game) {
    super(game, "Thrummingbird", "Commander 2016", "C16");
  }
}

module.exports = Thrummingbird;
