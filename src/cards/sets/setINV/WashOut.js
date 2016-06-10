"use strict";
const Constants = require ("../../../Constants");
const WashOutBase = require("../setC13/WashOut");

class WashOut extends WashOutBase {
  constructor (game) {
    super(game, "Wash Out", "Invasion", "INV");
  }
}

module.exports = WashOut;
