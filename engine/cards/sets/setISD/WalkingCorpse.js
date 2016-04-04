"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkingCorpse extends Card {
  constructor(game) {
    super(game, "Walking Corpse", "Innistrad", "ISD");
  }
}

module.exports = WalkingCorpse;
