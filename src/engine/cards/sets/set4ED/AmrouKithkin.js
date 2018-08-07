"use strict";
const Constants = require ("../../../Constants");
const AmrouKithkinBase = require("../setME3/AmrouKithkin");

class AmrouKithkin extends AmrouKithkinBase {
  constructor (game) {
    super(game, "Amrou Kithkin", "Fourth Edition", "4ED");
  }
}

module.exports = AmrouKithkin;
