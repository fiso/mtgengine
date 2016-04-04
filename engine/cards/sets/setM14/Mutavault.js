"use strict";
const Constants = require ("../../../Constants");
const MutavaultBase = require("../setpCMP/Mutavault");

class Mutavault extends MutavaultBase {
  constructor(game) {
    super(game, "Mutavault", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Mutavault;
