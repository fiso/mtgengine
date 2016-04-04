"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RepentanceBase = require("../setTMP/Repentance.js");

class Repentance extends RepentanceBase {
  constructor(game) {
    super(game, "Repentance", "Tempest Remastered", "TPR");
  }
}

module.exports = Repentance;
