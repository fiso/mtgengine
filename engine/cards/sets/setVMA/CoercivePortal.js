"use strict";
const Constants = require ("../../../Constants");
const CoercivePortalBase = require("../setCNS/CoercivePortal");

class CoercivePortal extends CoercivePortalBase {
  constructor(game) {
    super(game, "Coercive Portal", "Vintage Masters", "VMA");
  }
}

module.exports = CoercivePortal;
