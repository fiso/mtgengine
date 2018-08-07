"use strict";
const Constants = require ("../../../Constants");
const ErrantEphemeronBase = require("../setJVC/ErrantEphemeron");

class ErrantEphemeron extends ErrantEphemeronBase {
  constructor (game) {
    super(game, "Errant Ephemeron", "Modern Masters", "MMA");
  }
}

module.exports = ErrantEphemeron;
