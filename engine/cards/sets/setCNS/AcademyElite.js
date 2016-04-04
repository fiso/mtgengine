"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcademyElite extends Card {
  constructor(game) {
    super(game, "Academy Elite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AcademyElite;
