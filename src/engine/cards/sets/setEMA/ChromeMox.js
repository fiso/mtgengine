"use strict";
const Constants = require ("../../../Constants");
const ChromeMoxBase = require("../setMPS/ChromeMox");

class ChromeMox extends ChromeMoxBase {
  constructor (game) {
    super(game, "Chrome Mox", "Eternal Masters", "EMA");
  }
}

module.exports = ChromeMox;
