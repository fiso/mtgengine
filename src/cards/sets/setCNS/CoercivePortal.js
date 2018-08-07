"use strict";
const Constants = require ("../../../Constants");
const CoercivePortalBase = require("../setVMA/CoercivePortal");

class CoercivePortal extends CoercivePortalBase {
  constructor (game) {
    super(game, "Coercive Portal", "Conspiracy", "CNS");
  }
}

module.exports = CoercivePortal;
