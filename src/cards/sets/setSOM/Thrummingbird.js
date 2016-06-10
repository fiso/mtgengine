"use strict";
const Constants = require ("../../../Constants");
const ThrummingbirdBase = require("../setMM2/Thrummingbird");

class Thrummingbird extends ThrummingbirdBase {
  constructor (game) {
    super(game, "Thrummingbird", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Thrummingbird;
