"use strict";
const Constants = require ("../../../Constants");
const MightstoneBase = require("../setATQ/Mightstone");

class Mightstone extends MightstoneBase {
  constructor (game) {
    super(game, "Mightstone", "Masters Edition IV", "ME4");
  }
}

module.exports = Mightstone;
