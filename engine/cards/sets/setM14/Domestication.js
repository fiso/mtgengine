"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Domestication extends Card {
  constructor(game) {
    super(game, "Domestication", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Domestication;
