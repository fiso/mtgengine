"use strict";
const Constants = require ("../../../Constants");
const ScavengingOozeBase = require("../setCM2/ScavengingOoze");

class ScavengingOoze extends ScavengingOozeBase {
  constructor (game) {
    super(game, "Scavenging Ooze", "Modern Masters 2017", "MM3");
  }
}

module.exports = ScavengingOoze;
