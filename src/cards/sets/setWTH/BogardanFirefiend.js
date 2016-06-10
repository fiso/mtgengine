"use strict";
const Constants = require ("../../../Constants");
const BogardanFirefiendBase = require("../setHOP/BogardanFirefiend");

class BogardanFirefiend extends BogardanFirefiendBase {
  constructor (game) {
    super(game, "Bogardan Firefiend", "Weatherlight", "WTH");
  }
}

module.exports = BogardanFirefiend;
