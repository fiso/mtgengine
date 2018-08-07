"use strict";
const Constants = require ("../../../Constants");
const OrzhovAdvokistBase = require("../setCM2/OrzhovAdvokist");

class OrzhovAdvokist extends OrzhovAdvokistBase {
  constructor (game) {
    super(game, "Orzhov Advokist", "Commander 2016", "C16");
  }
}

module.exports = OrzhovAdvokist;
