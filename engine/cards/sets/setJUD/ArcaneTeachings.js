"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcaneTeachings extends Card {
  constructor(game) {
    super(game, "Arcane Teachings", "Judgment", "JUD");
  }
}

module.exports = ArcaneTeachings;
