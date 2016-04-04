"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishPioneerBase = require("../set8ED/ElvishPioneer.js");

class ElvishPioneer extends ElvishPioneerBase {
  constructor(game) {
    super(game, "Elvish Pioneer", "Onslaught", "ONS");
  }
}

module.exports = ElvishPioneer;
