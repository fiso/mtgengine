"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TaintedÆtherBase = require("../set7ED/TaintedÆther.js");

class TaintedÆther extends TaintedÆtherBase {
  constructor(game) {
    super(game, "Tainted Æther", "Urza's Saga", "USG");
  }
}

module.exports = TaintedÆther;
