"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiteofFlame extends Card {
  constructor(game) {
    super(game, "Rite of Flame", "Coldsnap", "CSP");
  }
}

module.exports = RiteofFlame;
