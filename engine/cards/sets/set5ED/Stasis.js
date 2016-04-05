"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setCED/Stasis");

class Stasis extends StasisBase {
  constructor(game) {
    super(game, "Stasis", "Fifth Edition", "5ED");
  }
}

module.exports = Stasis;
