"use strict";
const Constants = require ("../../../Constants");
const ScavengingOozeBase = require("../setM14/ScavengingOoze");

class ScavengingOoze extends ScavengingOozeBase {
  constructor(game) {
    super(game, "Scavenging Ooze", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ScavengingOoze;
