"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SharedFate extends Card {
  constructor(game) {
    super(game, "Shared Fate", "Mirrodin", "MRD");
  }
}

module.exports = SharedFate;
