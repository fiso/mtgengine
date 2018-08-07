"use strict";
const Constants = require ("../../../Constants");
const SkirkMarauderBase = require("../setARC/SkirkMarauder");

class SkirkMarauder extends SkirkMarauderBase {
  constructor (game) {
    super(game, "Skirk Marauder", "Arena League 2003", "PAL03");
  }
}

module.exports = SkirkMarauder;
