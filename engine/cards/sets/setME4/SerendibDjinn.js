"use strict";
const Constants = require ("../../../Constants");
const SerendibDjinnBase = require("../setARN/SerendibDjinn");

class SerendibDjinn extends SerendibDjinnBase {
  constructor(game) {
    super(game, "Serendib Djinn", "Masters Edition IV", "ME4");
  }
}

module.exports = SerendibDjinn;
