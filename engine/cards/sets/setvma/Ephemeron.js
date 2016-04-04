"use strict";
const Constants = require ("../../../Constants");
const EphemeronBase = require("../setEXO/Ephemeron");

class Ephemeron extends EphemeronBase {
  constructor(game) {
    super(game, "Ephemeron", "Vintage Masters", "VMA");
  }
}

module.exports = Ephemeron;
