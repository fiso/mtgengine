"use strict";
const Constants = require ("../../../Constants");
const InkfathomWitchBase = require("../setPC2/InkfathomWitch");

class InkfathomWitch extends InkfathomWitchBase {
  constructor (game) {
    super(game, "Inkfathom Witch", "Shadowmoor", "SHM");
  }
}

module.exports = InkfathomWitch;
