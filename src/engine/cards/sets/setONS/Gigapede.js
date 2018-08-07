"use strict";
const Constants = require ("../../../Constants");
const GigapedeBase = require("../setVMA/Gigapede");

class Gigapede extends GigapedeBase {
  constructor (game) {
    super(game, "Gigapede", "Onslaught", "ONS");
  }
}

module.exports = Gigapede;
