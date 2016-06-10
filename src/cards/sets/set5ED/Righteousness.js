"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Fifth Edition", "5ED");
  }
}

module.exports = Righteousness;
