"use strict";
const Constants = require ("../../../Constants");
const ArchonofJusticeBase = require("../setEVE/ArchonofJustice");

class ArchonofJustice extends ArchonofJusticeBase {
  constructor(game) {
    super(game, "Archon of Justice", "Magic 2012", "M12");
  }
}

module.exports = ArchonofJustice;
