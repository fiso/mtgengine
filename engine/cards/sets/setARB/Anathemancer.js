"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anathemancer extends Card {
  constructor(game) {
    super(game, "Anathemancer", "Alara Reborn", "ARB");
  }
}

module.exports = Anathemancer;
