"use strict";
const Constants = require ("../../../Constants");
const CrashofRhinosBase = require("../setBTD/CrashofRhinos");

class CrashofRhinos extends CrashofRhinosBase {
  constructor (game) {
    super(game, "Crash of Rhinos", "Mirage", "MIR");
  }
}

module.exports = CrashofRhinos;
