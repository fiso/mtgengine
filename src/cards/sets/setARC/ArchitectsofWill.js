"use strict";
const Constants = require ("../../../Constants");
const ArchitectsofWillBase = require("../setARB/ArchitectsofWill");

class ArchitectsofWill extends ArchitectsofWillBase {
  constructor (game) {
    super(game, "Architects of Will", "Archenemy", "ARC");
  }
}

module.exports = ArchitectsofWill;
