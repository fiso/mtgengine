"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishVanguard extends Card {
  constructor(game) {
    super(game, "Elvish Vanguard", "Onslaught", "ONS");
  }
}

module.exports = ElvishVanguard;
