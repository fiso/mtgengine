"use strict";
const Constants = require ("../../../Constants");
const SlaughtertheStrongBase = require("../setPRIX/SlaughtertheStrong");

class SlaughtertheStrong extends SlaughtertheStrongBase {
  constructor (game) {
    super(game, "Slaughter the Strong", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SlaughtertheStrong;
