"use strict";
const Constants = require ("../../../Constants");
const TheFallenBase = require("../setCHR/TheFallen");

class TheFallen extends TheFallenBase {
  constructor(game) {
    super(game, "The Fallen", "Masters Edition", "MED");
  }
}

module.exports = TheFallen;
