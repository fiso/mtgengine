"use strict";
const Constants = require ("../../../Constants");
const OasisBase = require("../setARN/Oasis");

class Oasis extends OasisBase {
  constructor(game) {
    super(game, "Oasis", "Masters Edition IV", "ME4");
  }
}

module.exports = Oasis;
