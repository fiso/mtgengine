"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkedbyHonor extends Card {
  constructor(game) {
    super(game, "Marked by Honor", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MarkedbyHonor;
