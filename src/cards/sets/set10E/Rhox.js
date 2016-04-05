"use strict";
const Constants = require ("../../../Constants");
const RhoxBase = require("../set8ED/Rhox");

class Rhox extends RhoxBase {
  constructor(game) {
    super(game, "Rhox", "Tenth Edition", "10E");
  }
}

module.exports = Rhox;
