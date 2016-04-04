"use strict";
const Constants = require ("../../../Constants");
const SkirkMarauderBase = require("../setARC/SkirkMarauder");

class SkirkMarauder extends SkirkMarauderBase {
  constructor(game) {
    super(game, "Skirk Marauder", "Legions", "LGN");
  }
}

module.exports = SkirkMarauder;
