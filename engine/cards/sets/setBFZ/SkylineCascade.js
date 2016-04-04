"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkylineCascade extends Card {
  constructor(game) {
    super(game, "Skyline Cascade", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SkylineCascade;
