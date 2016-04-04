"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishPathcutter extends Card {
  constructor(game) {
    super(game, "Elvish Pathcutter", "Onslaught", "ONS");
  }
}

module.exports = ElvishPathcutter;
