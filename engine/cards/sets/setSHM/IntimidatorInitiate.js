"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntimidatorInitiate extends Card {
  constructor(game) {
    super(game, "Intimidator Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = IntimidatorInitiate;
