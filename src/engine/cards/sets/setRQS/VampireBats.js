"use strict";
const Constants = require ("../../../Constants");
const VampireBatsBase = require("../setGVL/VampireBats");

class VampireBats extends VampireBatsBase {
  constructor (game) {
    super(game, "Vampire Bats", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = VampireBats;
