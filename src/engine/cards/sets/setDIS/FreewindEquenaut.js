"use strict";
const Constants = require ("../../../Constants");
const FreewindEquenautBase = require("../setDDL/FreewindEquenaut");

class FreewindEquenaut extends FreewindEquenautBase {
  constructor (game) {
    super(game, "Freewind Equenaut", "Dissension", "DIS");
  }
}

module.exports = FreewindEquenaut;
