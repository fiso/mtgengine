"use strict";
const Constants = require ("../../../Constants");
const MindslaverBase = require("../setSOM/Mindslaver");

class Mindslaver extends MindslaverBase {
  constructor (game) {
    super(game, "Mindslaver", "Mirrodin", "MRD");
  }
}

module.exports = Mindslaver;
