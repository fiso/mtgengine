"use strict";
const Constants = require ("../../../Constants");
const GalvanothBase = require("../setDDJ/Galvanoth");

class Galvanoth extends GalvanothBase {
  constructor (game) {
    super(game, "Galvanoth", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Galvanoth;
