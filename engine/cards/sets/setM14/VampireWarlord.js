"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireWarlord extends Card {
  constructor(game) {
    super(game, "Vampire Warlord", "Magic 2014 Core Set", "M14");
  }
}

module.exports = VampireWarlord;
