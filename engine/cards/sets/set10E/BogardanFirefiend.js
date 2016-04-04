"use strict";
const Constants = require ("../../../Constants");
const BogardanFirefiendBase = require("../setHOP/BogardanFirefiend");

class BogardanFirefiend extends BogardanFirefiendBase {
  constructor(game) {
    super(game, "Bogardan Firefiend", "Tenth Edition", "10E");
  }
}

module.exports = BogardanFirefiend;
