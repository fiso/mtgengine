"use strict";
const Constants = require ("../../../Constants");
const InvisibilityBase = require("../setCED/Invisibility");

class Invisibility extends InvisibilityBase {
  constructor (game) {
    super(game, "Invisibility", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Invisibility;
