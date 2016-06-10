"use strict";
const Constants = require ("../../../Constants");
const ErrantEphemeronBase = require("../setDD3_JVC/ErrantEphemeron");

class ErrantEphemeron extends ErrantEphemeronBase {
  constructor (game) {
    super(game, "Errant Ephemeron", "Time Spiral", "TSP");
  }
}

module.exports = ErrantEphemeron;
