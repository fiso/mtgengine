"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmolderInitiate extends Card {
  constructor(game) {
    super(game, "Smolder Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = SmolderInitiate;
