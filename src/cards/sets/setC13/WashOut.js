"use strict";
const Constants = require ("../../../Constants");
const WashOutBase = require("../setCMA/WashOut");

class WashOut extends WashOutBase {
  constructor (game) {
    super(game, "Wash Out", "Commander 2013", "C13");
  }
}

module.exports = WashOut;
