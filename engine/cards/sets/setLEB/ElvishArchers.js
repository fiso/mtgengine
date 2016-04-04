"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishArchersBase = require("../set6ED/ElvishArchers.js");

class ElvishArchers extends ElvishArchersBase {
  constructor(game) {
    super(game, "Elvish Archers", "Limited Edition Beta", "LEB");
  }
}

module.exports = ElvishArchers;
