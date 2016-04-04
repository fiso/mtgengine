"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchonoftheTriumvirateBase = require("../setpPRE/ArchonoftheTriumvirate.js");

class ArchonoftheTriumvirate extends ArchonoftheTriumvirateBase {
  constructor(game) {
    super(game, "Archon of the Triumvirate", "Return to Ravnica", "RTR");
  }
}

module.exports = ArchonoftheTriumvirate;
