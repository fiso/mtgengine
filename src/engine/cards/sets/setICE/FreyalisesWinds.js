"use strict";
const Constants = require ("../../../Constants");
const FreyalisesWindsBase = require("../setME3/FreyalisesWinds");

class FreyalisesWinds extends FreyalisesWindsBase {
  constructor (game) {
    super(game, "Freyalise's Winds", "Ice Age", "ICE");
  }
}

module.exports = FreyalisesWinds;
