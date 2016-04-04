"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GriffinSentinel extends Card {
  constructor(game) {
    super(game, "Griffin Sentinel", "Magic 2010", "M10");
  }
}

module.exports = GriffinSentinel;
