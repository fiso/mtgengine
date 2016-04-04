"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrummingbirdBase = require("../setMM2/Thrummingbird.js");

class Thrummingbird extends ThrummingbirdBase {
  constructor(game) {
    super(game, "Thrummingbird", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Thrummingbird;
