"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EliteJavelineerBase = require("../set8ED/EliteJavelineer.js");

class EliteJavelineer extends EliteJavelineerBase {
  constructor(game) {
    super(game, "Elite Javelineer", "Tempest", "TMP");
  }
}

module.exports = EliteJavelineer;
