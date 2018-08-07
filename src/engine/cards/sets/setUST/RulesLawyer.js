"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RulesLawyer extends UnimplementedCard {
  constructor (game) {
    super(game, "Rules Lawyer", "Unstable", "UST");
  }
}

module.exports = RulesLawyer;
