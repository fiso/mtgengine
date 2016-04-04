"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneSaw extends Card {
  constructor(game) {
    super(game, "Bone Saw", "Conflux", "CON");
  }
}

module.exports = BoneSaw;
