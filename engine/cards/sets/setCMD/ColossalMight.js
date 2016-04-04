"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ColossalMightBase = require("../setARB/ColossalMight.js");

class ColossalMight extends ColossalMightBase {
  constructor(game) {
    super(game, "Colossal Might", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ColossalMight;
