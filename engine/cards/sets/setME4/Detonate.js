"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setATQ/Detonate");

class Detonate extends DetonateBase {
  constructor(game) {
    super(game, "Detonate", "Masters Edition IV", "ME4");
  }
}

module.exports = Detonate;
