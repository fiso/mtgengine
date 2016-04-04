"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setATQ/Detonate");

class Detonate extends DetonateBase {
  constructor(game) {
    super(game, "Detonate", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = Detonate;
