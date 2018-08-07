"use strict";
const Constants = require ("../../../Constants");
const ChromeMoxBase = require("../setMPS/ChromeMox");

class ChromeMox extends ChromeMoxBase {
  constructor (game) {
    super(game, "Chrome Mox", "Magic Online Promos", "PRM");
  }
}

module.exports = ChromeMox;
