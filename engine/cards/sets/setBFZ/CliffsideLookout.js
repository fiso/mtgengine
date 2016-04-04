"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CliffsideLookout extends Card {
  constructor(game) {
    super(game, "Cliffside Lookout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CliffsideLookout;
