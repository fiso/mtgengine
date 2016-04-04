"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteArcanist extends Card {
  constructor(game) {
    super(game, "Elite Arcanist", "Magic 2014 Core Set", "M14");
  }
}

module.exports = EliteArcanist;
