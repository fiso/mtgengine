"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiteofPassage extends Card {
  constructor(game) {
    super(game, "Rite of Passage", "Fifth Dawn", "5DN");
  }
}

module.exports = RiteofPassage;
