"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor(game) {
    super(game, "Righteousness", "Ninth Edition", "9ED");
  }
}

module.exports = Righteousness;
