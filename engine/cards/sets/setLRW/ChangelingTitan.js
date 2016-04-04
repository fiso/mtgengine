"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChangelingTitan extends Card {
  constructor(game) {
    super(game, "Changeling Titan", "Lorwyn", "LRW");
  }
}

module.exports = ChangelingTitan;
