"use strict";
const Constants = require ("../../../Constants");
const OrzhovAdvokistBase = require("../setCM2/OrzhovAdvokist");

class OrzhovAdvokist extends OrzhovAdvokistBase {
  constructor (game) {
    super(game, "Orzhov Advokist", "You Make the Cube", "PZ2");
  }
}

module.exports = OrzhovAdvokist;
