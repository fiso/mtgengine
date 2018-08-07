"use strict";
const Constants = require ("../../../Constants");
const RulesLawyerBase = require("../setUST/RulesLawyer");

class RulesLawyer extends RulesLawyerBase {
  constructor (game) {
    super(game, "Rules Lawyer", "Judge Gift Cards 2017", "J17");
  }
}

module.exports = RulesLawyer;
