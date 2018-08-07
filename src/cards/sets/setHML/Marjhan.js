"use strict";
const Constants = require ("../../../Constants");
const MarjhanBase = require("../setME2/Marjhan");

class Marjhan extends MarjhanBase {
  constructor (game) {
    super(game, "Marjhan", "Homelands", "HML");
  }
}

module.exports = Marjhan;
