"use strict";
const Constants = require ("../../../Constants");
const FreyaliseLlanowarsFuryBase = require("../setCMA/FreyaliseLlanowarsFury");

class FreyaliseLlanowarsFury extends FreyaliseLlanowarsFuryBase {
  constructor (game) {
    super(game, "Freyalise, Llanowar's Fury", "Legendary Cube", "PZ1");
  }
}

module.exports = FreyaliseLlanowarsFury;
