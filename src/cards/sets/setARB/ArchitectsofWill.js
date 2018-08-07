"use strict";
const Constants = require ("../../../Constants");
const ArchitectsofWillBase = require("../setARC/ArchitectsofWill");

class ArchitectsofWill extends ArchitectsofWillBase {
  constructor (game) {
    super(game, "Architects of Will", "Alara Reborn", "ARB");
  }
}

module.exports = ArchitectsofWill;
