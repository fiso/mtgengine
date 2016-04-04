"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntedPlateMail extends Card {
  constructor(game) {
    super(game, "Haunted Plate Mail", "Magic 2014 Core Set", "M14");
  }
}

module.exports = HauntedPlateMail;
