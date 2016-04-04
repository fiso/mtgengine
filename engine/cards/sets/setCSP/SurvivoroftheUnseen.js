"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurvivoroftheUnseen extends Card {
  constructor(game) {
    super(game, "Survivor of the Unseen", "Coldsnap", "CSP");
  }
}

module.exports = SurvivoroftheUnseen;
