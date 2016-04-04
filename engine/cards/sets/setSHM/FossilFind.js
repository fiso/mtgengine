"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FossilFind extends Card {
  constructor(game) {
    super(game, "Fossil Find", "Shadowmoor", "SHM");
  }
}

module.exports = FossilFind;
