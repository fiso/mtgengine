"use strict";
const Constants = require ("../../../Constants");
const RisefromtheGraveBase = require("../setC15/RisefromtheGrave");

class RisefromtheGrave extends RisefromtheGraveBase {
  constructor(game) {
    super(game, "Rise from the Grave", "WPN and Gateway", "pWPN");
  }
}

module.exports = RisefromtheGrave;
