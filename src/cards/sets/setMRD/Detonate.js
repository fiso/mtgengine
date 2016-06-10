"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setATQ/Detonate");

class Detonate extends DetonateBase {
  constructor (game) {
    super(game, "Detonate", "Mirrodin", "MRD");
  }
}

module.exports = Detonate;
