"use strict";
const Constants = require ("../../../Constants");
const RisefromtheGraveBase = require("../setMTGA/RisefromtheGrave");

class RisefromtheGrave extends RisefromtheGraveBase {
  constructor (game) {
    super(game, "Rise from the Grave", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = RisefromtheGrave;
