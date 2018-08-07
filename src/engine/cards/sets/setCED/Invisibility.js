"use strict";
const Constants = require ("../../../Constants");
const InvisibilityBase = require("../setM15/Invisibility");

class Invisibility extends InvisibilityBase {
  constructor (game) {
    super(game, "Invisibility", "Collectors’ Edition", "CED");
  }
}

module.exports = Invisibility;
