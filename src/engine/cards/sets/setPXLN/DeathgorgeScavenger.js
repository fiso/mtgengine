"use strict";
const Constants = require ("../../../Constants");
const DeathgorgeScavengerBase = require("../setXLN/DeathgorgeScavenger");

class DeathgorgeScavenger extends DeathgorgeScavengerBase {
  constructor (game) {
    super(game, "Deathgorge Scavenger", "Ixalan Promos", "PXLN");
  }
}

module.exports = DeathgorgeScavenger;
