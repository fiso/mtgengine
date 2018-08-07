"use strict";
const Constants = require ("../../../Constants");
const ScavengingOozeBase = require("../setCM2/ScavengingOoze");

class ScavengingOoze extends ScavengingOozeBase {
  constructor (game) {
    super(game, "Scavenging Ooze", "Duels of the Planeswalkers Promos 2013", "PDP13");
  }
}

module.exports = ScavengingOoze;
