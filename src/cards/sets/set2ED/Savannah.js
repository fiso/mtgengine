"use strict";
const Constants = require ("../../../Constants");
const SavannahBase = require("../setCED/Savannah");

class Savannah extends SavannahBase {
  constructor (game) {
    super(game, "Savannah", "Unlimited Edition", "2ED");
  }
}

module.exports = Savannah;
