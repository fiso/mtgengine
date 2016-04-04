"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirkMarauderBase = require("../setARC/SkirkMarauder.js");

class SkirkMarauder extends SkirkMarauderBase {
  constructor(game) {
    super(game, "Skirk Marauder", "Arena League", "pARL");
  }
}

module.exports = SkirkMarauder;
