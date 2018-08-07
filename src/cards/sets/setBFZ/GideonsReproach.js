"use strict";
const Constants = require ("../../../Constants");
const GideonsReproachBase = require("../setDOM/GideonsReproach");

class GideonsReproach extends GideonsReproachBase {
  constructor (game) {
    super(game, "Gideon's Reproach", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GideonsReproach;
