"use strict";
const Constants = require ("../../../Constants");
const AuguryAdeptBase = require("../setC13/AuguryAdept");

class AuguryAdept extends AuguryAdeptBase {
  constructor (game) {
    super(game, "Augury Adept", "Shadowmoor", "SHM");
  }
}

module.exports = AuguryAdept;
