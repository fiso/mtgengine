"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor(game) {
    super(game, "Righteousness", "Fourth Edition", "4ED");
  }
}

module.exports = Righteousness;
