"use strict";
const Constants = require ("../../../Constants");
const MawcorBase = require("../setTPR/Mawcor");

class Mawcor extends MawcorBase {
  constructor (game) {
    super(game, "Mawcor", "Seventh Edition", "7ED");
  }
}

module.exports = Mawcor;
