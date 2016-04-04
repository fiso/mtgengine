"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScavengingOozeBase = require("../setM14/ScavengingOoze.js");

class ScavengingOoze extends ScavengingOozeBase {
  constructor(game) {
    super(game, "Scavenging Ooze", "Media Inserts", "pMEI");
  }
}

module.exports = ScavengingOoze;
