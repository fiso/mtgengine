"use strict";
const Constants = require ("../../../Constants");
const EnfeeblementBase = require("../set9ED/Enfeeblement");

class Enfeeblement extends EnfeeblementBase {
  constructor (game) {
    super(game, "Enfeeblement", "Mirage", "MIR");
  }
}

module.exports = Enfeeblement;
