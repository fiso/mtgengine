"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setDDL/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Righteousness;
