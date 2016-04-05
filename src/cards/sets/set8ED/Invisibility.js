"use strict";
const Constants = require ("../../../Constants");
const InvisibilityBase = require("../setCED/Invisibility");

class Invisibility extends InvisibilityBase {
  constructor(game) {
    super(game, "Invisibility", "Eighth Edition", "8ED");
  }
}

module.exports = Invisibility;
