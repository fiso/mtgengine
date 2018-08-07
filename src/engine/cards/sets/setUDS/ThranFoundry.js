"use strict";
const Constants = require ("../../../Constants");
const ThranFoundryBase = require("../setWC99/ThranFoundry");

class ThranFoundry extends ThranFoundryBase {
  constructor (game) {
    super(game, "Thran Foundry", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranFoundry;
