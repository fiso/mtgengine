"use strict";
const Constants = require ("../../../Constants");
const RisefromtheGraveBase = require("../setMTGA/RisefromtheGrave");

class RisefromtheGrave extends RisefromtheGraveBase {
  constructor (game) {
    super(game, "Rise from the Grave", "Magic Online Promos", "PRM");
  }
}

module.exports = RisefromtheGrave;
