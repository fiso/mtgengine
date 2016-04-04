"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkPetition extends Card {
  constructor(game) {
    super(game, "Dark Petition", "Magic Origins", "ORI");
  }
}

module.exports = DarkPetition;
