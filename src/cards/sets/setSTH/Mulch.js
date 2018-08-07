"use strict";
const Constants = require ("../../../Constants");
const MulchBase = require("../setCMA/Mulch");

class Mulch extends MulchBase {
  constructor (game) {
    super(game, "Mulch", "Stronghold", "STH");
  }
}

module.exports = Mulch;
