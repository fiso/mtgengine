"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setCED/Stasis");

class Stasis extends StasisBase {
  constructor (game) {
    super(game, "Stasis", "Unlimited Edition", "2ED");
  }
}

module.exports = Stasis;
