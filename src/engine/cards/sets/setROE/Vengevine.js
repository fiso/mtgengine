"use strict";
const Constants = require ("../../../Constants");
const VengevineBase = require("../setPWCQ/Vengevine");

class Vengevine extends VengevineBase {
  constructor (game) {
    super(game, "Vengevine", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Vengevine;
