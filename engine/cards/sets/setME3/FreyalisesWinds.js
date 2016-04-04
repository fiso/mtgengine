"use strict";
const Constants = require ("../../../Constants");
const FreyalisesWindsBase = require("../setICE/FreyalisesWinds");

class FreyalisesWinds extends FreyalisesWindsBase {
  constructor(game) {
    super(game, "Freyalise's Winds", "Masters Edition III", "ME3");
  }
}

module.exports = FreyalisesWinds;
