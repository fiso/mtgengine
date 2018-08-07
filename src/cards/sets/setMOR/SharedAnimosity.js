"use strict";
const Constants = require ("../../../Constants");
const SharedAnimosityBase = require("../setE02/SharedAnimosity");

class SharedAnimosity extends SharedAnimosityBase {
  constructor (game) {
    super(game, "Shared Animosity", "Morningtide", "MOR");
  }
}

module.exports = SharedAnimosity;
