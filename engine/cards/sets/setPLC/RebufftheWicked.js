"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RebufftheWicked extends Card {
  constructor(game) {
    super(game, "Rebuff the Wicked", "Planar Chaos", "PLC");
  }
}

module.exports = RebufftheWicked;
