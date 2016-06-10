"use strict";
const Constants = require ("../../../Constants");
const InvisibilityBase = require("../setCED/Invisibility");

class Invisibility extends InvisibilityBase {
  constructor (game) {
    super(game, "Invisibility", "International Collector's Edition", "CEI");
  }
}

module.exports = Invisibility;
