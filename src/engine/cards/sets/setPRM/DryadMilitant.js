"use strict";
const Constants = require ("../../../Constants");
const DryadMilitantBase = require("../setRTR/DryadMilitant");

class DryadMilitant extends DryadMilitantBase {
  constructor (game) {
    super(game, "Dryad Militant", "Magic Online Promos", "PRM");
  }
}

module.exports = DryadMilitant;
