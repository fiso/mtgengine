"use strict";
const Constants = require ("../../../Constants");
const EnfeeblementBase = require("../set6ED/Enfeeblement");

class Enfeeblement extends EnfeeblementBase {
  constructor (game) {
    super(game, "Enfeeblement", "Mirage", "MIR");
  }
}

module.exports = Enfeeblement;
