"use strict";
const Constants = require ("../../../Constants");
const MindslaverBase = require("../setMRD/Mindslaver");

class Mindslaver extends MindslaverBase {
  constructor(game) {
    super(game, "Mindslaver", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Mindslaver;
