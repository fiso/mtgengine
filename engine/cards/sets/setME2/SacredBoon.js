"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacredBoonBase = require("../set5ED/SacredBoon.js");

class SacredBoon extends SacredBoonBase {
  constructor(game) {
    super(game, "Sacred Boon", "Masters Edition II", "ME2");
  }
}

module.exports = SacredBoon;
