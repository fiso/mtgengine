"use strict";
const Constants = require ("../../../Constants");
const PyramidofthePantheonBase = require("../setAKH/PyramidofthePantheon");

class PyramidofthePantheon extends PyramidofthePantheonBase {
  constructor (game) {
    super(game, "Pyramid of the Pantheon", "Amonkhet Promos", "PAKH");
  }
}

module.exports = PyramidofthePantheon;
