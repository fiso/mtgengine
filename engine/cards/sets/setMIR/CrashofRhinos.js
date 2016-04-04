"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrashofRhinosBase = require("../setBTD/CrashofRhinos.js");

class CrashofRhinos extends CrashofRhinosBase {
  constructor(game) {
    super(game, "Crash of Rhinos", "Mirage", "MIR");
  }
}

module.exports = CrashofRhinos;
