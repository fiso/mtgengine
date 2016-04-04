"use strict";
const Constants = require ("../../../Constants");
const InvisibilityBase = require("../setCED/Invisibility");

class Invisibility extends InvisibilityBase {
  constructor(game) {
    super(game, "Invisibility", "Unlimited Edition", "2ED");
  }
}

module.exports = Invisibility;
