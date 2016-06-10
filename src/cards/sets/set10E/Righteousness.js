"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Tenth Edition", "10E");
  }
}

module.exports = Righteousness;
