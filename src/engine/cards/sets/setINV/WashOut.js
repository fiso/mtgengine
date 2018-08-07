"use strict";
const Constants = require ("../../../Constants");
const WashOutBase = require("../setCMA/WashOut");

class WashOut extends WashOutBase {
  constructor (game) {
    super(game, "Wash Out", "Invasion", "INV");
  }
}

module.exports = WashOut;
