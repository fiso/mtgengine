"use strict";
const Constants = require ("../../../Constants");
const PyromancersSwathBase = require("../setFUT/PyromancersSwath");

class PyromancersSwath extends PyromancersSwathBase {
  constructor(game) {
    super(game, "Pyromancer's Swath", "Modern Masters", "MMA");
  }
}

module.exports = PyromancersSwath;
