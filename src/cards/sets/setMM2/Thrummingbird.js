"use strict";
const Constants = require ("../../../Constants");
const ThrummingbirdBase = require("../setCM2/Thrummingbird");

class Thrummingbird extends ThrummingbirdBase {
  constructor (game) {
    super(game, "Thrummingbird", "Modern Masters 2015", "MM2");
  }
}

module.exports = Thrummingbird;
