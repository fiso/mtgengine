"use strict";
const Constants = require ("../../../Constants");
const EnfeeblementBase = require("../set9ED/Enfeeblement");

class Enfeeblement extends EnfeeblementBase {
  constructor (game) {
    super(game, "Enfeeblement", "Tempest", "TMP");
  }
}

module.exports = Enfeeblement;
