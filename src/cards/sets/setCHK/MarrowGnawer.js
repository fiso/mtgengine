"use strict";
const Constants = require ("../../../Constants");
const MarrowGnawerBase = require("../setPHUK/MarrowGnawer");

class MarrowGnawer extends MarrowGnawerBase {
  constructor (game) {
    super(game, "Marrow-Gnawer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MarrowGnawer;
