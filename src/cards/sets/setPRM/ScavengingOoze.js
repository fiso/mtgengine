"use strict";
const Constants = require ("../../../Constants");
const ScavengingOozeBase = require("../setCM2/ScavengingOoze");

class ScavengingOoze extends ScavengingOozeBase {
  constructor (game) {
    super(game, "Scavenging Ooze", "Magic Online Promos", "PRM");
  }
}

module.exports = ScavengingOoze;
