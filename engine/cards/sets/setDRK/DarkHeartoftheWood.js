"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkHeartoftheWoodBase = require("../setRAV/DarkHeartoftheWood.js");

class DarkHeartoftheWood extends DarkHeartoftheWoodBase {
  constructor(game) {
    super(game, "Dark Heart of the Wood", "The Dark", "DRK");
  }
}

module.exports = DarkHeartoftheWood;
