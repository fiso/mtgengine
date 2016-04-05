"use strict";
const Constants = require ("../../../Constants");
const MutavaultBase = require("../setpCMP/Mutavault");

class Mutavault extends MutavaultBase {
  constructor(game) {
    super(game, "Mutavault", "Morningtide", "MOR");
  }
}

module.exports = Mutavault;
