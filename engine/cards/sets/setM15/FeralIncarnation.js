"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeralIncarnation extends Card {
  constructor(game) {
    super(game, "Feral Incarnation", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FeralIncarnation;
