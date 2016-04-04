"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchonofJusticeBase = require("../setEVE/ArchonofJustice.js");

class ArchonofJustice extends ArchonofJusticeBase {
  constructor(game) {
    super(game, "Archon of Justice", "Magic 2012", "M12");
  }
}

module.exports = ArchonofJustice;
