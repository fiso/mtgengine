"use strict";
const Constants = require ("../../../Constants");
const TheFallenBase = require("../setMED/TheFallen");

class TheFallen extends TheFallenBase {
  constructor (game) {
    super(game, "The Fallen", "Chronicles", "CHR");
  }
}

module.exports = TheFallen;
