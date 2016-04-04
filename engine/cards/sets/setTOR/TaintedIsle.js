"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TaintedIsleBase = require("../setPC2/TaintedIsle.js");

class TaintedIsle extends TaintedIsleBase {
  constructor(game) {
    super(game, "Tainted Isle", "Torment", "TOR");
  }
}

module.exports = TaintedIsle;
