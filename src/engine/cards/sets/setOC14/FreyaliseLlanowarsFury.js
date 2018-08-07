"use strict";
const Constants = require ("../../../Constants");
const FreyaliseLlanowarsFuryBase = require("../setCMA/FreyaliseLlanowarsFury");

class FreyaliseLlanowarsFury extends FreyaliseLlanowarsFuryBase {
  constructor (game) {
    super(game, "Freyalise, Llanowar's Fury", "Commander 2014 Oversized", "OC14");
  }
}

module.exports = FreyaliseLlanowarsFury;
