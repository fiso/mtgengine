"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Override extends Card {
  constructor(game) {
    super(game, "Override", "Mirrodin", "MRD");
  }
}

module.exports = Override;
