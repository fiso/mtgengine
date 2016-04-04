"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcademyRaider extends Card {
  constructor(game) {
    super(game, "Academy Raider", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AcademyRaider;
