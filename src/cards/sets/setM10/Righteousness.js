"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Magic 2010", "M10");
  }
}

module.exports = Righteousness;
