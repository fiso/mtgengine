"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllusoryDemon extends Card {
  constructor(game) {
    super(game, "Illusory Demon", "Alara Reborn", "ARB");
  }
}

module.exports = IllusoryDemon;
