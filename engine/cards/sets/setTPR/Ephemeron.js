"use strict";
const Constants = require ("../../../Constants");
const EphemeronBase = require("../setEXO/Ephemeron");

class Ephemeron extends EphemeronBase {
  constructor(game) {
    super(game, "Ephemeron", "Tempest Remastered", "TPR");
  }
}

module.exports = Ephemeron;
