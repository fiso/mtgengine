"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeneratorServant extends Card {
  constructor(game) {
    super(game, "Generator Servant", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GeneratorServant;
