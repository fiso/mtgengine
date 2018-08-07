"use strict";
const Constants = require ("../../../Constants");
const AvaraxBase = require("../setEMA/Avarax");

class Avarax extends AvaraxBase {
  constructor (game) {
    super(game, "Avarax", "Onslaught", "ONS");
  }
}

module.exports = Avarax;
