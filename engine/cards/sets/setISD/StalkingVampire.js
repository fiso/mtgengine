"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalkingVampire extends Card {
  constructor(game) {
    super(game, "Stalking Vampire", "Innistrad", "ISD");
  }
}

module.exports = StalkingVampire;
