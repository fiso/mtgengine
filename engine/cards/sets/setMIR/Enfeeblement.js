"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnfeeblementBase = require("../set6ED/Enfeeblement.js");

class Enfeeblement extends EnfeeblementBase {
  constructor(game) {
    super(game, "Enfeeblement", "Mirage", "MIR");
  }
}

module.exports = Enfeeblement;
