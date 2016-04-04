"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InkfathomWitchBase = require("../setPC2/InkfathomWitch.js");

class InkfathomWitch extends InkfathomWitchBase {
  constructor(game) {
    super(game, "Inkfathom Witch", "Shadowmoor", "SHM");
  }
}

module.exports = InkfathomWitch;
