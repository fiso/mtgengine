"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrownerInitiate extends Card {
  constructor(game) {
    super(game, "Drowner Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = DrownerInitiate;
