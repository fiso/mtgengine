"use strict";
const Constants = require ("../../../Constants");
const WakeThrasherBase = require("../setDDT/WakeThrasher");

class WakeThrasher extends WakeThrasherBase {
  constructor (game) {
    super(game, "Wake Thrasher", "Eventide", "EVE");
  }
}

module.exports = WakeThrasher;
