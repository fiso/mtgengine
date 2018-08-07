"use strict";
const Constants = require ("../../../Constants");
const DrakeHavenBase = require("../setAKH/DrakeHaven");

class DrakeHaven extends DrakeHavenBase {
  constructor (game) {
    super(game, "Drake Haven", "Amonkhet Promos", "PAKH");
  }
}

module.exports = DrakeHaven;
