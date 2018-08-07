"use strict";
const Constants = require ("../../../Constants");
const FirebreathingBase = require("../setM12/Firebreathing");

class Firebreathing extends FirebreathingBase {
  constructor (game) {
    super(game, "Firebreathing", "Magic 2010", "M10");
  }
}

module.exports = Firebreathing;
