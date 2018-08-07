"use strict";
const Constants = require ("../../../Constants");
const ScavengingOozeBase = require("../setCM2/ScavengingOoze");

class ScavengingOoze extends ScavengingOozeBase {
  constructor (game) {
    super(game, "Scavenging Ooze", "Magic 2014", "M14");
  }
}

module.exports = ScavengingOoze;
