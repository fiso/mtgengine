"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishArchersBase = require("../set6ED/ElvishArchers.js");

class ElvishArchers extends ElvishArchersBase {
  constructor(game) {
    super(game, "Elvish Archers", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = ElvishArchers;
