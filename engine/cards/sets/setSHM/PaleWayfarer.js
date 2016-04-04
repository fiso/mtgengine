"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaleWayfarer extends Card {
  constructor(game) {
    super(game, "Pale Wayfarer", "Shadowmoor", "SHM");
  }
}

module.exports = PaleWayfarer;
