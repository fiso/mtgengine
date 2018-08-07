"use strict";
const Constants = require ("../../../Constants");
const GriptideBase = require("../setDDM/Griptide");

class Griptide extends GriptideBase {
  constructor (game) {
    super(game, "Griptide", "Dark Ascension", "DKA");
  }
}

module.exports = Griptide;
