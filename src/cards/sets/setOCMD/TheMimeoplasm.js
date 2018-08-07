"use strict";
const Constants = require ("../../../Constants");
const TheMimeoplasmBase = require("../setCM2/TheMimeoplasm");

class TheMimeoplasm extends TheMimeoplasmBase {
  constructor (game) {
    super(game, "The Mimeoplasm", "Commander 2011 Oversized", "OCMD");
  }
}

module.exports = TheMimeoplasm;
