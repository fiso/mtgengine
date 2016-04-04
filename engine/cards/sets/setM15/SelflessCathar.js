"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelflessCatharBase = require("../setISD/SelflessCathar.js");

class SelflessCathar extends SelflessCatharBase {
  constructor(game) {
    super(game, "Selfless Cathar", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SelflessCathar;
