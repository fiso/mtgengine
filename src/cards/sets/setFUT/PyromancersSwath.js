"use strict";
const Constants = require ("../../../Constants");
const PyromancersSwathBase = require("../setMMA/PyromancersSwath");

class PyromancersSwath extends PyromancersSwathBase {
  constructor (game) {
    super(game, "Pyromancer's Swath", "Future Sight", "FUT");
  }
}

module.exports = PyromancersSwath;
