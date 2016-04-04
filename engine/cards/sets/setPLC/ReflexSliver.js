"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReflexSliver extends Card {
  constructor(game) {
    super(game, "Reflex Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = ReflexSliver;
