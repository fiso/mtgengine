"use strict";
const Constants = require ("../../../Constants");
const WashOutBase = require("../setCMA/WashOut");

class WashOut extends WashOutBase {
  constructor (game) {
    super(game, "Wash Out", "IDW Comics 2014", "PI14");
  }
}

module.exports = WashOut;
