"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElderMastery extends Card {
  constructor(game) {
    super(game, "Elder Mastery", "Conflux", "CON");
  }
}

module.exports = ElderMastery;
